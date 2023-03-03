import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddApartment = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [picture, setPicture] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const apartmentToCreate = {
      img: picture,
      title: title,
      pricePerDay: price,
    }
    try {
      await axios.post(
        'https://ironbnb-m3.herokuapp.com/apartments',
        apartmentToCreate
      )

      navigate('/apartments')

      // const res = await fetch('https://ironbnb-m3.herokuapp.com/apartments', {
      //   method: 'post',
      //   headers: {
      //     'content-type': 'application/json; charset=utf-8',
      //   },
      //   body: JSON.stringify(apartmentToCreate),
      // })
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          name="title"
        />
      </div>
      <div>
        <label htmlFor="price">Price / day:</label>
        <input
          onChange={(event) => setPrice(event.target.value)}
          value={price}
          type="number"
          name="price"
          min={0}
        />
      </div>
      <div>
        <label htmlFor="price">Picture :</label>
        <input
          onChange={(event) => setPicture(event.target.value)}
          value={picture}
          type="text"
          name="picture"
        />
      </div>

      <button>Create</button>
    </form>
  )
}

export default AddApartment
