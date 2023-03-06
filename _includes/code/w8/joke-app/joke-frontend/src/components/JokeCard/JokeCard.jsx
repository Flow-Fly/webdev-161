import React from 'react'
import { Link } from 'react-router-dom'

const JokeCard = ({ _id, category, joke }) => {
  return (
    <li key={_id}>
      <h3>{category}</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{joke}</p>
      <Link to={`/joke/${_id}`}> Click me </Link>
    </li>
  )
}

export default JokeCard
