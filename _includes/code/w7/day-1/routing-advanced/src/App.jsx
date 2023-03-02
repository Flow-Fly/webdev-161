import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'

/**
 * - npm i react-router-dom
 * - Configuring the BrowserRouter
 * - Defining Routes (And Route)
 * - Handling navigation with Link
 *
 * - Advanced Routes:
 *  - Dynamic Routing and params
 *  - Routing priority
 *  - Not Found Route
 *  - Nested Routes
 *  - Shared Layout(s) and Outlet
 *  - Link and NavLink
 */

import Home from './pages/Home/Home'
import Countries from './pages/Countries/Countries'
import About from './pages/About/About'
import Country from './pages/Country/Country'
import Layout from './pages/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />}>
            <Route path=":code" element={<Country />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
