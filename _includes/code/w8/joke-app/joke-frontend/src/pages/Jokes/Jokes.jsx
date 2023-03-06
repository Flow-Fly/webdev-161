import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JokeCard from '../../components/JokeCard/JokeCard'
import List from '../../components/List/List'

const Jokes = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    try {
      axios.get('http://localhost:5005/api/jokes').then((response) => {
        console.log(response.data)
        setJokes(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  )
}

export default Jokes
