import React, { useState } from 'react'
import Title from './../Title/Title'
import BandForm from '../BandForm/BandForm'

const DayThree = () => {
  const [count, setCount] = useState(0)
  const [bands, setBands] = useState([])

  const handleIncrement = () => setCount(count + 1)

  const handleAddBand = (band) => {
    console.log('Adding a band')
    const copy = [...bands]
    copy.push(band)
    setBands(copy)
  }

  return (
    <>
      <Title>{count}</Title>
      <VeryOldOne handleIncrement={handleIncrement} />

      <Title>Forms in React</Title>
      {/* Form to create a band */}
      <BandForm handleAddBand={handleAddBand} />
      {/* Display the band informations */}

      {bands.map((band) => {
        return (
          <div>
            <h3>{band.name}</h3>
            <p>
              {new Date(band.creationYear).toLocaleDateString(undefined, {
                weekday: 'short',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p>{band.style}</p>
          </div>
        )
      })}
    </>
  )
}

function VeryOldOne(props) {
  return <Ancient handleIncrement={props.handleIncrement} />
}
function Ancient(props) {
  return <MiddleGuy handleIncrement={props.handleIncrement} />
}
function MiddleGuy(props) {
  return <Children handleIncrement={props.handleIncrement} />
}
function Children(props) {
  // const handleIncrement = () => {
  //   props.setCount((currentCount) => currentCount + 1)
  // }
  return <button onClick={props.handleIncrement}> + </button>
}

export default DayThree
