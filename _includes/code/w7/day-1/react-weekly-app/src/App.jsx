import './App.css'
import { useState } from 'react'

import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'

import DayOne from './components/DayOne/DayOne'
import DayTwo from './components/DayTwo/DayTwo'
import DayThree from './components/DayThree/DayThree'
import DayFour from './components/DayFour/DayFour'

import ShowMeTheCode from './components/ShowMeTheCode/ShowMeTheCode'
import Title from './components/Title/Title'
import Button from './components/Button/Button'

function App() {
  const [days, setDays] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  })

  const handleDayClick = (day) => {
    return () => setDays({ ...days, [day]: !days[day] })
  }

  // const [showDayOne, setShowDayOne] = useState(false)
  // const [showDayTwo, setShowDayTwo] = useState(false)
  // const [showDayThree, setShowDayThree] = useState(false)
  // const handleDayOneClick = () => {
  //   setShowDayOne(!showDayOne)
  // }
  // const handleDayTwoClick = () => {
  //   setShowDayTwo(!showDayTwo)
  // }
  // const handleDayThreeClick = () => {
  //   setShowDayThree(!showDayThree)
  // }
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* DAY ONE */}

        <Button callback={handleDayClick('one')}>Show day 1</Button>
        {days.one && (
          <section>
            <Title big={true}>Day one Code</Title>
            <ShowMeTheCode components="DayOne" />
            {/* Contain all of the code for Day 1 */}
            <DayOne />
          </section>
        )}
        {/* DAY TWO */}

        <Button callback={handleDayClick('two')}>Show day 2</Button>
        {days.two && (
          <section>
            <Title big>Day two Code</Title>
            <ShowMeTheCode components="DayTwo" />
            <DayTwo />
          </section>
        )}
        {/* DAY THREE */}

        <Button callback={handleDayClick('three')}>Show day 3</Button>
        {days.three && (
          <section>
            <Title big>Day three Code</Title>
            <ShowMeTheCode components="DayThree" />
            <DayThree />
          </section>
        )}
        {/* DAY Four */}

        <Button callback={handleDayClick('four')}>Show day 4</Button>
        {days.four && (
          <section>
            <Title big>Day four Code</Title>
            <ShowMeTheCode components="DayFour" />
            <DayFour />
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
