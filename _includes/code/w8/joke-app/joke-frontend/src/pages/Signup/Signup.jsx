import { useState } from 'react'
import myApi from './../../service/service'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [{ username, password }, setFormData] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // const [count, setCount] = useState(0)
  // setCount( count + 1)
  // setCount((current) => current + 2)
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  function handleChange(event) {
    const updatedState = {
      username,
      password,
      [event.target.id]: event.target.value,
    }
    setFormData(updatedState)
    // setFormData((current) => ({
    //   ...current,
    //   [event.target.id]: event.target.value,
    // }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const userToCreate = { username, password }

    try {
      const response = await myApi.post('/auth/signup', userToCreate)
      if (response.status === 201) {
        navigate('/login')
      }
    } catch (error) {
      console.error(error.response.data)
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
      </div>
      {/* &copy;This webise is &gt; > now clearly mine */}
      {error.length > 0 && <p className="error">{error}</p>}
      <button>Signup</button>
    </form>
  )
}
