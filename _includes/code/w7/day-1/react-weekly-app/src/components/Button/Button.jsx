import React from 'react'
import './Button.css'
const Button = ({ children, callback }) => {
  return (
    <button onClick={callback} className="Button">
      {children}
    </button>
  )
}

export default Button
