import myApi from '../../service/service'
import React, { useState } from 'react'
import Confetti from 'react-confetti'

const AddJoke = () => {
  // A joke is composed of well, a joke and a category.
  const [joke, setJoke] = useState('')
  const [category, setCategory] = useState('-1')
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const jokeToCreate = { joke, category }
    try {
      const response = await myApi.createJoke(jokeToCreate)
      // const response = await myApi.post('/', jokeToCreate)
      console.log(response)

      if (response.status === 201) {
        setShowConfetti(true)
        setCategory('-1')
        setJoke('')
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000)
      }
      console.log(response)
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
        <button>Create a joke</button>
      </div>
      {showConfetti && <Confetti recycle={false} />}
    </form>
  )
}

export default AddJoke
