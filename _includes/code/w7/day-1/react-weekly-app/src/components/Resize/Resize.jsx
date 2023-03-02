import React, { useState, useEffect } from 'react'

function getScreenDimensions() {
  const width = window.innerWidth
  const height = window.innerHeight

  return { width, height }
}

const Resize = () => {
  const [dimensions, setDimensions] = useState(getScreenDimensions)

  function getNewSize() {
    const newDimension = getScreenDimensions()
    setDimensions(newDimension)
  }

  useEffect(() => {
    // const myWindow = window
    window.addEventListener('resize', getNewSize)
    return () => {
      window.removeEventListener('resize', getNewSize)
    }
  }, [])

  return (
    <div>
      <p>Width: {dimensions.width}</p>
      <p>Height: {dimensions.height}</p>
    </div>
  )
}

export default Resize
