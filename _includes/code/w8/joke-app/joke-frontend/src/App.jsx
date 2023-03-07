import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Jokes from './pages/Jokes/Jokes'
import Joke from './pages/Joke/Joke'
import AddJoke from './pages/AddJoke/AddJoke'
import EditJoke from './pages/EditJoke/EditJoke'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/joke/:jokeId" element={<Joke />} />
          <Route path="/joke/new" element={<AddJoke />} />
          <Route path="/joke/:jokeId/edit" element={<EditJoke />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
