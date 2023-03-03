import React from 'react'
import { Link } from 'react-router-dom'

const ApartmentCard = (props) => {
  const apartment = props.apartment
  return (
    <div className="ApartmentCard">
      <h3>
        <Link to={'/apartment/' + apartment._id}>{apartment.title}</Link>
      </h3>
      <img width={100} src={apartment.img} alt={apartment.title} />
      <p>{apartment.pricePerDay}</p>
    </div>
  )
}

export default ApartmentCard
