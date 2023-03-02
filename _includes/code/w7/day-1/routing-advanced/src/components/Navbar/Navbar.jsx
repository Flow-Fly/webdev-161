import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
