import React, { useState, useEffect } from 'react'
import myApi from './../../service/service'
import JokeCard from '../../components/JokeCard/JokeCard'
import List from '../../components/List/List'

const Jokes = () => {
  const [jokes, setJokes] = useState([])
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    Pun: false,
    Programming: false,
    Dark: false,
  })

  useEffect(() => {
    let queryString = ''
    if (query) {
      queryString = `joke=${query}`
    }
    for (const key in filters) {
      if (filters[key]) {
        queryString += `&category=${key}`
      }
    }
    try {
      myApi.get(`/?${queryString}`).then((response) => {
        console.log(response.data)
        setJokes(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }, [query, filters])

  const handleCheckBox = (event) => {
    setFilters((current) => {
      return { ...current, [event.target.name]: event.target.checked }
    })
  }

  return (
    <div>
      <div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search jokes"
        />
      </div>
      <fieldset>
        <legend>Filter by category</legend>
        <div>
          <label htmlFor="pun">Pun: </label>
          <input
            checked={filters.Pun}
            onChange={handleCheckBox}
            type="checkbox"
            name="Pun"
            id="pun"
          />
        </div>
        <div>
          <label htmlFor="programming">Programming: </label>
          <input
            checked={filters.Programming}
            onChange={handleCheckBox}
            type="checkbox"
            name="Programming"
            id="programming"
          />
        </div>
        <div>
          <label htmlFor="dark">Dark: </label>
          <input
            checked={filters.Dark}
            type="checkbox"
            onChange={handleCheckBox}
            name="Dark"
            id="dark"
          />
        </div>
      </fieldset>
      <List array={jokes} MyComponent={JokeCard} />

      {/* {jokes.map((joke) => {
          return (
            <JokeCard
              key={joke._id}
              {...joke}

              // Spreading the joke Object allow us to create all of the key value-pair
              // from the object (joke) as props
              // _id={joke._id}
              // category={joke.category}
              // joke={joke.joke}
            />
          )
        })} */}
    </div>
  )
}

export default Jokes
