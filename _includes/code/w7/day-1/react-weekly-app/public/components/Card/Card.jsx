import React from 'react'
import './Card.css'

// Happy way
const Card = ({ name, picture }) => {
  // const { name, picture } = props
  /**
   * This stateless component does a few thing, first we finally use
   * destructuring on the "props" Object!
   * Then we display the "name" key and the image associated
   */
  return (
    <div className="Card">
      <h2>{name}</h2>
      <picture>
        <img src={picture} alt={name} />
      </picture>
    </div>
  )
}

// Boring way
// const Card = (props) => {
//   return (
//     <div className="Card">
//       <h2>{props.name}</h2>
//       <picture>
//         <img src={props.picture} alt={props.name} />
//       </picture>
//     </div>
//   )
// }

export default Card
