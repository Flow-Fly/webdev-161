import './App.css'
import { useState } from 'react'
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'
import Title from './components/Title/Title'
import DayOne from './components/DayOne/DayOne'
import DayTwo from './components/DayTwo/DayTwo'
import ShowMeTheCode from './components/ShowMeTheCode/ShowMeTheCode'
import Button from './components/Button/Button'
import DayThree from './components/DayThree/DayThree'

function App() {
  const [showDayOne, setShowDayOne] = useState(false)
  const [showDayTwo, setShowDayTwo] = useState(false)
  const [showDayThree, setShowDayThree] = useState(false)
  const handleDayOneClick = () => {
    setShowDayOne(!showDayOne)
  }
  const handleDayTwoClick = () => {
    setShowDayTwo(!showDayTwo)
  }
  const handleDayThreeClick = () => {
    setShowDayThree(!showDayThree)
  }
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* DAY ONE */}

        <Button callback={handleDayOneClick}>Show day 1</Button>
        {showDayOne && (
          <section>
            <Title big={true}>Day one Code</Title>
            <ShowMeTheCode components="DayOne" />
            {/* Contain all of the code for Day 1 */}
            <DayOne />
          </section>
        )}
        {/* DAY TWO */}

        <Button callback={handleDayTwoClick}>Show day 2</Button>
        {showDayTwo && (
          <section>
            <Title big>Day two Code</Title>
            <ShowMeTheCode components="DayTwo"></ShowMeTheCode>
            <DayTwo />
          </section>
        )}
        {/* DAY THREE */}

        <Button callback={handleDayThreeClick}>Show day 3</Button>
        {showDayThree && (
          <section>
            <Title big>Day three Code</Title>
            <ShowMeTheCode components="DayThree"></ShowMeTheCode>
            <DayThree />
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
