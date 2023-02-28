import './App.css'
import { useState } from 'react'
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'
import Title from './components/Title/Title'
import DayOne from './components/DayOne/DayOne'
import DayTwo from './components/DayTwo/DayTwo'
import ShowMeTheCode from './components/ShowMeTheCode/ShowMeTheCode'

function App() {
  const [showDayOne, setShowDayOne] = useState(false)
  const handleDayOneClick = () => {
    setShowDayOne(!showDayOne)
  }
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <button onClick={handleDayOneClick}>Show day 1</button>
        {showDayOne && (
          <>
            <Title big={true}>Day one Code</Title>
            <ShowMeTheCode components="DayOne" />
            {/* Contain all of the code for Day 1 */}
            <DayOne />
          </>
        )}
        <DayTwo />
      </main>

      <Footer />
    </>
  )
}

export default App
