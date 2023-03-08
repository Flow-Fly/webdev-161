import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Outlet, NavLink } from 'react-router-dom'
import Switcheroo from '../../components/Switcheroo/Switcheroo'

const Layout = () => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext)
  function handleClick() {
    removeToken()
    authenticateUser()
  }
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
            {!user ? (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              </>
            ) : (
              <button onClick={handleClick}>Logout</button>
            )}
          </ul>
        </nav>
        <Switcheroo />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
