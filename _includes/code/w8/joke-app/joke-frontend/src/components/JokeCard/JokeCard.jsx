import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
import './JokeCard.css'

const JokeCard = ({ _id, category, joke }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className={`JokeCard ${theme}`} key={_id}>
      <h3>{category}</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{joke}</p>
      <Link to={`/joke/${_id}`}> Click me </Link>
    </div>
  )
}

export default JokeCard
