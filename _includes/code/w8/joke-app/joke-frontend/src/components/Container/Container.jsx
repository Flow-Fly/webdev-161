import React from 'react'
import './Container.css'
const Container = (props) => {
  const { gap, background, direction } = props
  /**
   * The Container Component receive some parametrable styling:
   * - gap
   * - background (for backgroundColor, default to white)
   * - direction (default to row)
   */

  const style = {
    gap: gap ? gap : '1rem',
    backgroundColor: background ? background : 'inherit',
    flexDirection: direction ? direction : 'row',
  }
  return (
    <div className="Container" style={style}>
      {props.children}
    </div>
  )
}

export default Container
