import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
