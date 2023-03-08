import { useContext } from 'react'
import { AuthContext } from './../../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function IsLoggedOut() {
  const { isLoading, user } = useContext(AuthContext)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (user) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default IsLoggedOut
