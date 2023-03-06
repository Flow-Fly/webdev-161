import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jokes">Jokes</NavLink>
            </li>
            <li>
              <NavLink to="/joke/new">Add a Joke</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
