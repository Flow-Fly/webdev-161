import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import Apartments from '../../pages/Apartments/Apartments'
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/apartments">Apartments</NavLink>
          </li>
          <li>
            <NavLink to="/apartment/create">Create an Apartment</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
