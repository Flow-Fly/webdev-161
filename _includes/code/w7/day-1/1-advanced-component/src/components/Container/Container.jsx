import React from 'react'
import './Container.css'
const Container = (props) => {
  console.log(props)
  return (
    <div
      className="Container"
      style={{ gap: props.gap, backgroundColor: props.background }}
    >
      {props.children}
    </div>
  )
}

export default Container
