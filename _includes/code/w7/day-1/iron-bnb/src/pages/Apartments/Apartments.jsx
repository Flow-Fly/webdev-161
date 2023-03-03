import React, { useState, useEffect } from 'react'
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard'

const Apartments = () => {
  const [apartments, setApartments] = useState(null)

  useEffect(() => {
    fetch('https://ironbnb-m3.herokuapp.com/apartments')
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setApartments(response)
      })
      .catch((e) => console.error(e))
  }, [])

  console.log('Apartments state: ', apartments)

  if (!apartments) {
    return <div className="Loading">Loading...</div>
  }
  return (
    <div>
      {apartments.map((apartment) => {
        // console.log(apartment)
        return <ApartmentCard key={apartment._id} apartment={apartment} />
      })}
    </div>
  )
}

export default Apartments
