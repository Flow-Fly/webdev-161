import React, { useState } from 'react'
import Container from '../Container/Container'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [hello, setHello] = useState('Hello')
  const handleDecrement = () => {
    setCount((currentState) => currentState - 1)
    setHello(hello + '!')
  }
  const handleIncrement = () => {
    setHello(hello + '!')
    setCount(count + 1)
  }
  console.log('Rendering!')
  console.log(count)
  return (
    <>
      <Container background="black">
        {/* <button
          onClick={() => {
            setCount(count - 1)
          }}
        >
          -
        </button> */}
        <button onClick={handleDecrement}>-</button>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>+</button>

        <p>{hello}</p>
      </Container>
    </>
  )
}

export default Counter
