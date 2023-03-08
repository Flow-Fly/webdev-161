import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Jokes from './pages/Jokes/Jokes'
import Joke from './pages/Joke/Joke'
import AddJoke from './pages/AddJoke/AddJoke'
import EditJoke from './pages/EditJoke/EditJoke'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ProtectedRoute from './pages/Navigation/ProtectedRoute'
import IsLoggedOut from './pages/Navigation/IsLoggedOut'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/joke/:jokeId" element={<Joke />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/joke/new" element={<AddJoke />} />
            <Route path="/joke/:jokeId/edit" element={<EditJoke />} />
          </Route>

          <Route element={<IsLoggedOut />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
