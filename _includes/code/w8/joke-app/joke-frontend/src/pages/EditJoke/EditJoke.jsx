import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import axios from 'axios'
import myApi from '../../service/service'

const EditJoke = () => {
  const [joke, setJoke] = useState('')
  const [category, setCategory] = useState('-1')
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    myApi
      .getOneJoke(params.jokeId)
      .then((res) => {
        setJoke(res.data.oneJoke.joke)
        setCategory(res.data.oneJoke.category)
      })
      .catch((e) => console.error(e))
    // myApi
    //   .get(`/${params.jokeId}`)
    //   .then((response) => {
    //     console.log(response.data)
    //     setJoke(response.data.oneJoke.joke)
    //     setCategory(response.data.oneJoke.category)
    //   })
    //   .catch((e) => console.error(e))
    // axios
    //   .get(`http://localhost:5005/api/jokes/${params.jokeId}`)
    //   .then((response) => {
    //     console.log(response.data)
    //     setJoke(response.data.oneJoke.joke)
    //     setCategory(response.data.oneJoke.category)
    //   })
    //   .catch((e) => console.error(e))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const jokeToUpdate = { joke, category }

    try {
      const newJoke = await myApi.updateJoke(params.jokeId, jokeToUpdate)
      // const newJoke = await axios.patch(
      //   `http://localhost:5005/api/jokes/${params.jokeId}`,
      //   jokeToUpdate
      // )
      if (newJoke.status === 202) {
        navigate('/jokes')
      }
      console.log(newJoke)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="joke">Your joke:</label>
      <div>
        <textarea
          value={joke}
          name="joke"
          id="joke"
          cols="30"
          rows="10"
          onChange={(event) => setJoke(event.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="category">Category: </label>
        <select
          value={category}
          name=""
          id=""
          onChange={(event) => setCategory(event.target.value)}
        >
          <option disabled value="-1">
            Select a category
          </option>
          <option value="Pun">Pun</option>
          <option value="Programming">Programming</option>
          <option value="Dark">Dark</option>
        </select>
        <button>Update a joke</button>
      </div>
    </form>
  )
}

export default EditJoke
