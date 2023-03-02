import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './../../components/Spinner/Spinner'
const Country = () => {
  const [country, setCountry] = useState(null)
  // Kindly ask to use params to give me those params, please
  // const params = useParams()
  const { cca2 } = useParams()
  const url = 'https://restcountries.com/v3.1/alpha'
  // console.log(cca2)

  useEffect(() => {
    fetch(`${url}/${cca2}`)
      .then((raw) => {
        return raw.json()
      })
      .then((res) => {
        console.log(res)
        setCountry(res[0])
      })
  }, [])

  if (!country) {
    return <Spinner />
  }

  return (
    <div>
      {country.name.common} {country.flag}
    </div>
  )
}

export default Country
