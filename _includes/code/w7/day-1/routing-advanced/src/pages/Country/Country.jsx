import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './../../components/Spinner/Spinner'
const Country = () => {
  const [country, setCountry] = useState(null)
  // Kindly ask to use params to give me those params, please
  // const params = useParams()
  const { code } = useParams()
  const url = 'https://restcountries.com/v3.1/alpha'
  console.log(code)

  const fetchCountry = async () => {
    try {
      const raw = await fetch(`${url}/${code}`)
      const res = await raw.json()
      setCountry(res[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCountry()
    // fetch(`${url}/${code}`)
    //   .then((raw) => {
    //     return raw.json()
    //   })
    //   .then((res) => {
    //     console.log(res)
    //     setCountry(res[0])
    //   })
    //   .catch((error) => console.log(error))
  }, [code, url])

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
