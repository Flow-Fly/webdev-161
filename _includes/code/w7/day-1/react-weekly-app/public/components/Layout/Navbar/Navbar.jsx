import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li id="home">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
