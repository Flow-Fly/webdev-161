import './App.css'

/**
 ** Instructions:
 **
 ** Today we are going to use an API: https://ironbnb-m3.herokuapp.com
 **
 ** it had 3 endpoints:
 **
 ** GET /apartments  return a JSON file with an Array of apartments
 ** GET /apartments/:id  return a JSON file with an apartment Object
 ** POST /apartments Create a new apartment
 **
 ** Request body for the post:
 ** {
 **    title: String,
 **    pricePerDay: Number
 ** }
 **
 **
 ** Let's start by installing the BrowserRouter.
 **
 ** 1- The App.
 ** The app component should just be very welcoming and ask me to checkout the list
 **  of apartments by clicking on a Link.
 **
 ** 2- The Routes
 ** We will then create the Routing, I want to have a Navbar on the top of my page
 ** once I navigate to the '/apartments/...' routes.
 ** Think of the Layout and Outlet we created yesterday.
 **
 ** 3- The Navbar
 ** Let's add a Navbar which will allow me to:
 ** - Go to the '/apartments' Appartments component
 ** - Go to the '/apartment/create' AddApartment component
 **
 ** 4- The Apartments component
 **  -> Should fetch all the apartments and display them.
 Let's create a state to store the apatments
 **  (We might want to create a ApartmentCard component)
 **
 ** 5- The OneApartment component
 **  -> Should fetch one apartment via the id found on the url and display it.
 **
 ** 6- The AddApartment component
 **  -> Should display a form and onSubmit use fetch to POST the apartment.
 **  -> We should "redirect" (navigate) to the page of the apartment we just created.
 **/

import { Link, Routes, Route } from 'react-router-dom'
import Apartment from './pages/Apartments/Apartments'
import OneApartment from './pages/OneApartment/OneApartment'
import AddApartment from './pages/AddApartment/AddApartment'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Navbar />}>
          <Route path="/apartments" element={<Apartment />} />
          <Route path="/apartment/:apartmentId" element={<OneApartment />} />
          <Route path="/apartment/create" element={<AddApartment />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
