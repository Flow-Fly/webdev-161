import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard'

const OneApartment = () => {
  const [apartment, setApartment] = useState(null)
  const params = useParams()
  console.log(params)

  useEffect(() => {
    fetch('https://ironbnb-m3.herokuapp.com/apartments/' + params.apartmentId)
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setApartment(response)
      })
      .catch((e) => console.error(e))
  }, [])

  if (!apartment) {
    return <div className="Loading">Loading!</div>
  }
  return <ApartmentCard apartment={apartment} />
}

export default OneApartment
