import React, { useState } from 'react'
import './BandForm.css'

const BandForm = (props) => {
  const { handleAddBand } = props

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [style, setStyle] = useState('')
  const [num, setNum] = useState(0)

  const handleNameChange = (event) => setName(event.target.value)
  const handleStyleChange = (event) => setStyle(event.target.value)
  const handleYearChange = (event) => setYear(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Creating a band')
    // console.log(name, year, style)
    const bandToCreate = {
      name,
      style,
      creationYear: year,
    }
    // console.log(bandToCreate)
    handleAddBand(bandToCreate)
    setName('')
    setStyle('')
    setYear('')
  }
  // console.log(props)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Band name:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>

      <input
        type="number"
        min={0}
        value={num}
        onChange={(e) => {
          console.log('hey', e.target.value)
          setNum(e.target.value)
        }}
        name=""
        id=""
      />
      <div>
        <label htmlFor="year">
          Creation date:
          <input
            type="date"
            id="year"
            name="year"
            value={year}
            onChange={handleYearChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="style">
          Style:
          <input
            type="text"
            id="style"
            name="style"
            value={style}
            onChange={handleStyleChange}
          />
        </label>
      </div>

      <button>Create a band</button>
    </form>
  )
}

export default BandForm
