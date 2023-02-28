import React, { useState } from 'react'
import Container from '../Container/Container'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const [hello, setHello] = useState('Hello')
  const handleDecrement = () => {
    // setCount(count - 2)
    // setCount(count - 1)
    setClickCount(clickCount + 1)
    setCount((currentState) => currentState - 1)
    setCount((currentState) => {
      console.log('CurrentState: ', currentState)
      return currentState - 1
    })
    setHello(hello + '!')
  }
  const handleIncrement = () => {
    setClickCount(clickCount + 1)

    setHello(hello + '!')
    setCount(count + 1)
  }
  console.log('Rendering!')
  // console.log(count)
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
        <h3>
          Counter: {count} Clicked {clickCount}{' '}
          {Math.abs(clickCount) >= 2 ? 'times' : 'time'}
        </h3>
        <button onClick={handleIncrement}>+</button>

        <p>{hello}</p>
      </Container>
    </>
  )
}

export default Counter
