import { useState } from 'react';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import User from './pages/User';
import Layout from './components/Layout';

function App() {

  return (
    <div className="App">
      <h1>Routing</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/users/profile">Profile</Link></li>
          <li><Link to="/users/favourites">Favourites</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/about' element={<About />} />

        <Route path='/users' element={<Layout />}>
          <Route path='profile' element={<h2>Profile</h2>} />
          <Route path='favourites' element={<h2>Favourites</h2>} />
          <Route path=':username' element={<User />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
