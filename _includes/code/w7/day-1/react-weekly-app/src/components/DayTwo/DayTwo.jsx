import React, { useState } from 'react'
import ClassCounter from '../ClassCounter/ClassCounter'
import Container from '../Container/Container'
import Counter from '../Counter/Counter'
import moviesDB from './movies'
import './css.css'

const DayTwo = () => {
  const [movies, setMovies] = useState(moviesDB.slice(0, 3))

  const handleAddMovie = () => {
    const randomMovie = moviesDB[Math.floor(Math.random() * moviesDB.length)]
    // setMovies([...movies, randomMovie])
    // const copy = [...movies, randomMovie]
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

  const handleSortMovie = () => {
    const copy = [...movies]
    copy.sort((a, b) => a.year - b.year)
    setMovies(copy)
  }

  const handleDelete = (title) => {
    const newList = movies.filter((movie) => movie.title !== title)
    setMovies(newList)
  }

  return (
    <section>
      <Counter />
      <ClassCounter />
      <button onClick={handleAddMovie}>Add a movie 🎥</button>
      <button onClick={handleSortMovie}>Sort by Production year 🎥</button>
      <Container background="black">
        {movies.map((movie) => {
          return (
            <div
              key={movie.title}
              className={`CardMovie ${movie.score >= 9 && 'great'}`}
            >
              <span onClick={() => handleDelete(movie.title)}>X</span>
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Production year: {movie.year}</p>
              <p>Genres: {movie.genre.join(' ')}</p>
              <p>Score: {movie.score}</p>
            </div>
          )
        })}
      </Container>
    </section>
  )
}

export default DayTwo
