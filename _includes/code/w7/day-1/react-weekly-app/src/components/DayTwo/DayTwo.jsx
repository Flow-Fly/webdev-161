import React, { useState } from 'react'
import ClassCounter from '../ClassCounter/ClassCounter'
import Container from '../Container/Container'
import Counter from '../Counter/Counter'
import moviesDB from './movies'
import Button from '../Button/Button'
import ShowMeTheCode from '../ShowMeTheCode/ShowMeTheCode'
import MovieCard from '../MovieCard/MovieCard'
import './DayTwo.css'

const DayTwo = () => {
  const [movies, setMovies] = useState(moviesDB.slice(0, 3))
  const [searchString, setSearchString] = useState('')
  const handleAddMovie = () => {
    /**
     * Get all the titles we currently have in our state
     */
    const titlesOfExistingMovies = movies.map((movie) => movie.title)
    /**
     * Filter the moviesDB so that we just have the movies
     * that don't exist in our state
     */
    const listWithNoDuplicates = moviesDB.filter(
      (movie) => !titlesOfExistingMovies.includes(movie.title)
    )
    /**
     * If no movie can be added, just return
     */
    if (!listWithNoDuplicates.length) {
      return
    }
    /**
     * Get a random movie from my list with no duplicates
     */
    const randomMovie =
      listWithNoDuplicates[
        Math.floor(Math.random() * listWithNoDuplicates.length)
      ]
    // setMovies([...movies, randomMovie])
    // const copy = [...movies, randomMovie]

    /**
     * Make a copy of the state, push the randomMovie in the copy
     * and then set this copy as my new state.
     */
    const copy = [...movies]

    copy.push(randomMovie)
    setMovies(copy)
    /**
     * Here we are mutating the state
     * therefore we won't have any rerender because the new state
     * is the same as the previous one
     */
    // setMovies((currentMovies) => {
    //   currentMovies.push(randomMovie)
    //   console.log(currentMovies)
    //   return currentMovies
    // })
  }
  const handleSortMovieByTitle = () => {
    const copy = [...movies]
    setMovies(copy.sort((a, b) => a.title.localeCompare(b.title)))
  }

  const handleSortMovieByYear = () => {
    const copy = [...movies]
    copy.sort((a, b) => a.year - b.year)
    setMovies(copy)
  }

  const handleSortMovieByNote = () => {
    const copy = [...movies]
    setMovies(copy.sort((a, b) => b.score - a.score))
  }

  const handleDelete = (title) => {
    const newList = movies.filter((movie) => movie.title !== title)
    setMovies(newList)
  }

  const handleSearch = ({ target }) => {
    setSearchString(target.value)
    // filterMovies(target.value)
  }
  // const filterMovies = (search) => {
  //   const moviesToDisplay = movies.filter((movie) => {
  //     return movie.title.match(RegExp(search, 'i'))
  //     return movie.title.toLowerCase().includes(searchString.toLowerCase())
  //   })
  //   setMovies(moviesToDisplay)
  // }

  let moviesToDisplay = movies
  if (searchString !== '') {
    moviesToDisplay = movies.filter((movie) => {
      return movie.title.match(new RegExp(searchString, 'i'))
      return movie.title.toLowerCase().includes(searchString.toLowerCase())
    })
  }

  return (
    <>
      <div>
        <Counter />
        <ShowMeTheCode components={'Counter'} />
        <ClassCounter />
        <ShowMeTheCode components={'ClassCounter'} />
        <Container>
          <Button callback={handleAddMovie}>Add a movie 🎥</Button>
          <Button callback={handleSortMovieByYear}>
            Sort by Production year 🎥
          </Button>
          <Button callback={handleSortMovieByTitle}>Sort by title 🎥</Button>
          <Button callback={handleSortMovieByNote}>Sort by note 🎥</Button>
        </Container>
      </div>
      <Container>
        <input
          placeholder="Search a movie"
          type="search"
          value={searchString}
          onChange={handleSearch}
        />
      </Container>
      <Container>
        {moviesToDisplay.map((movie) => {
          return (
            <MovieCard
              key={movie.title}
              movie={movie}
              handleDelete={handleDelete}
            />
          )
        })}
      </Container>
    </>
  )
}

export default DayTwo
