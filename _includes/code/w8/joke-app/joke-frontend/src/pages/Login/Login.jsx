import { useState, useContext } from 'react'
import myApi from './../../service/service'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { storeToken, authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    const userToLogin = { username, password }

    try {
      const response = await myApi.post('/auth/login', userToLogin)
      console.log(response)
      storeToken(response.data.token)
      await authenticateUser()
    } catch (error) {
      console.error(error.response.data.message)
      setError(error.response.data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username:&nbsp;
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:&nbsp;
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      {/* &copy;This webise is &gt; > now clearly mine */}
      {error.length > 0 && <p className="error">{error}</p>}
      <button>Login</button>
    </form>
  )
}
