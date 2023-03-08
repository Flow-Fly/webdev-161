import { use } from 'react'

// getProduct is a pending Promise, res.json() return a Promise.
const getProduct = fetch('https://dummyjson.com/products/1').then((res) =>
  res.json()
)

function ExperimentalFetching() {
  // The use hook (experimental) expect to receive a promise.
  // The fallback values like "Loading..." or error handling are not hapenning
  // In this component but in the parent component(s).
  // If we can't yet display the product, the fallback from the
  // Suspense component is going to be displayed.
  // If there is any error happening, the error will "bubble up"
  // And fall into the ErrorBoundary component (The only class based component that is still needed.)
  const product = use(getProduct)
  return <div>{product.title}</div>
}

export default ExperimentalFetching
