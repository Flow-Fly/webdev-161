import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Switcheroo.css'
const Switcheroo = () => {
  const { setTheme, theme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className="theme-wrapper">
      <label id="theme" htmlFor="theme-input">
        <span className="theme-logo">🌙</span>
        <input
          type="checkbox"
          checked={theme === 'light'}
          onChange={(event) => {
            if (theme === 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          }}
          id="theme-input"
        />

        <span className="theme-toggle"></span>
        <span className="theme-logo">🌞</span>
      </label>
    </div>
  )
}

export default Switcheroo
