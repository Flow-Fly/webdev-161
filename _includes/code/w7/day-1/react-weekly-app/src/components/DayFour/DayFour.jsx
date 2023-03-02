import React from 'react'
import LifeCycleTimer from '../LifeCycleTimer/LifeCycleTimer'
import Resize from '../Resize/Resize'

/**
 * - npm i react-router-dom
 * - Configuring the BrowserRouter
 * - Defining Routes (And Route)
 * - Handling navigation with Link
 *
 * Advanced routes in an other react application for clarity 😊
 * - Advanced Routes:
 *  - Dynamic Routing and params
 *  - Routing priority
 *  - Not Found Route
 *  - Nested Routes
 *  - Shared Layout(s) and Outlet
 *  - Link and NavLink
 */
import { Routes, Route } from 'react-router-dom'
import DayOne from '../DayOne/DayOne'
const DayFour = () => {
  return (
    <section>
      {/* LifeCycle */}
      {/* <LifeCycleTimer /> */}
      {/* <Resize /> */}

      {/* Basic Routing */}
      <Routes>
        <Route path="/" element={<h1>We are on /</h1>} />
        <Route path="/contact" element={<h1>We are on /contact</h1>} />
        <Route path="/about" element={<h1>We are on /about</h1>} />
        <Route path="/day-one" element={<DayOne />} />
      </Routes>
    </section>
  )
}

export default DayFour
