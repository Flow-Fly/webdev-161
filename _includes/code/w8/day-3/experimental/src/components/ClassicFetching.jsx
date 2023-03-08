import { useState, useEffect } from 'react'

function ClassicFetching() {
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((json) => setProduct(json))
  }, [])

  if (!product) return <div>Loading...</div>

  return <div>{product.title}</div>
}

export default ClassicFetching
