import React, { useState, useEffect } from 'react'
import Container from '../Container/Container'

const LifeCycleTimer = () => {
  const [time, setTime] = useState(0)
  let greaterThanTen = time % 10 === 0

  // This is the Devil
  // setInterval(() => {
  //   setTime((currentTime) => currentTime + 1)
  // }, 1000)

  /**
   * Base structure of the useEffect hook
   */
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255),
      g = Math.floor(Math.random() * 255),
      b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
  }
  // useEffect(() => {}, [])
  /**
   * useEffect with no dependency Array is the little Devil
   */

  /**
   * This useEffect will run once, when the component is mounted.
   */
  useEffect(() => {
    console.log('Component mounted')
    const intervalId = setInterval(() => {
      console.log('executed!')
      setTime((currentTime) => currentTime + 1)
    }, 1000)

    return () => {
      console.log('Component is unmounting')
      clearInterval(intervalId)
    }
  }, [])

  /**
   * This useEffect will run when the component is mounted
   * AND when the time or greaterThanTen variables changes.
   */
  useEffect(() => {
    // console.log('Update of time: ', time)
  }, [time, greaterThanTen])

  /**
   * This useEffect will run when the component is mounted
   * AND when the greaterThanTen variable change.
   */
  useEffect(() => {
    // console.log(greaterThanTen)
  }, [greaterThanTen])

  return (
    <Container background={getRandomColor()}>
      <h3>{time}</h3>
    </Container>
  )
}

export default LifeCycleTimer
