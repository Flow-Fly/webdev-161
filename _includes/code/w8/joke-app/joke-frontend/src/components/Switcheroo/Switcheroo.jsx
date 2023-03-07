import React from 'react'
import './Switcheroo.css'
const Switcheroo = () => {
  return (
    <div className="theme-wrapper">
      <label id="theme" htmlFor="theme-input">
        <span className="theme-logo">🌙</span>
        <input type="checkbox" id="theme-input" />

        <span className="theme-toggle"></span>
        <span className="theme-logo">🌞</span>
      </label>
    </div>
  )
}

export default Switcheroo
