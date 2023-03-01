import React, { useState } from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
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
    // setHello(hello + '!')
  }
  const handleIncrement = () => {
    setClickCount(clickCount + 1)
    setCount(count + 1)

    // setHello(hello + '!')
  }
  // console.log('Rendering!')
  // console.log(count)
  return (
    <>
      <Container>
        {/* <button
          onClick={() => {
            setCount(count - 1)
          }}
        >
          -
        </button> */}

        <Button callback={handleDecrement}>-</Button>
        <h3>
          Counter: {count} Clicked {clickCount}{' '}
          {Math.abs(clickCount) >= 2 ? 'times' : 'time'}
        </h3>
        <Button callback={handleIncrement}>+</Button>
      </Container>
      {/* <p>{hello}</p> */}
    </>
  )
}

export default Counter
