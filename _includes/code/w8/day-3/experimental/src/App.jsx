import './App.css'
import { Suspense, useState } from 'react'
import ClassicFetching from './components/ClassicFetching'
import ExperimentalFetching from './components/ExperimentalFetching'
import ErrorBoundary from './components/ErrorBoundary'
function App() {
  const [showComponent, setShowComponent] = useState({ one: true, two: false })
  return (
    <div className="App">
      <button
        onClick={() =>
          setShowComponent((current) => ({
            ...current,
            one: !showComponent.one,
          }))
        }
      >
        Classic Fetching
      </button>
      {showComponent.one && <ClassicFetching />}
      <button
        onClick={() =>
          setShowComponent((current) => ({
            ...current,
            two: !showComponent.two,
          }))
        }
      >
        Experimental Fetching
      </button>
      {showComponent.two && (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <ExperimentalFetching />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  )
}

export default App
