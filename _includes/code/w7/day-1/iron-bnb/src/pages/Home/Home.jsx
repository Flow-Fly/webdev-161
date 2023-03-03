import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Welcome to my cool app</p>

      <Link to="/apartments">Click me! to checkout all the apartments!</Link>
    </div>
  )
}

export default Home
