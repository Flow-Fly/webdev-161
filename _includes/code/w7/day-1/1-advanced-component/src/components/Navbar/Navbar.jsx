import React from 'react'
import './Navbar.css'
const Navbar = (props) => {
  console.log(props)
  return (
    <header className="Navbar">
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
