import React from 'react'
import './MovieCard.css'

const MovieCard = ({ handleDelete, movie }) => {
  return (
    <div className={`MovieCard ${movie.score >= 8.8 && 'great'}`}>
      <div className="close" onClick={() => handleDelete(movie.title)}>
        <span className="cross"></span>
      </div>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Production year: {movie.year}</p>
      <p>Genres: {movie.genre.join(' ')}</p>
      <p>Score: {movie.score}</p>
    </div>
  )
}

export default MovieCard
