import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Countries = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/countries/fr">France</Link>
        </li>
        <li>
          <Link to="/countries/us">United States of America</Link>
        </li>
        <li>
          <Link to="/countries/de">Deutschland</Link>
        </li>
      </ul>
    </div>
  )
}

export default Countries
