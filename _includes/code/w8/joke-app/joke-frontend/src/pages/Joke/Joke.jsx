import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Joke = () => {
  const [joke, setJoke] = useState(null)
  const params = useParams()
  console.log(params)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/jokes/${params.jokeId}`)
      .then((response) => {
        console.log(response.data)
        setJoke(response.data.oneJoke)
      })
      .catch((e) => console.error(e))
  }, [])

  const handleClick = async () => {
    try {
      await axios.delete(`http://localhost:5005/api/jokes/${params.jokeId}`)
      navigate('/jokes')
    } catch (error) {
      console.error(error)
    }
  }

  if (!joke) {
    return <div className="loading">Loading...</div>
  }
  return (
    <>
      <h2>{joke.category}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{joke.joke}</p>
      <Link to={`/joke/${joke._id}/edit`}>Edit that joke</Link>
      <button onClick={handleClick}>Delete</button>
      <pre>{JSON.stringify(joke, null, 2)}</pre>
    </>
  )
}

export default Joke
