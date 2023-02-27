import './App.css'
import secondCat from './assets/cat-2.jpg'

function getRandomColor() {
  const r = Math.random() * 255,
    g = Math.random() * 255,
    b = Math.random() * 255
  return `rgb(${r}, ${g}, ${b})`
}

function App() {
  const myVariable = 'React allow you to add variables in your JSX!'
  const greet = (name) => `Hello ${name}`

  const myFunction = () => console.log('clickety click')

  const arrayOfStudents = [
    <li>Bob</li>,
    <li>John</li>,
    <li>Alice</li>,
    <li>Lisa</li>,
  ]

  const textToBePassedDown = 'Passing down some props!'

  const countingToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="App">
      <h1>Hello World of React!</h1>
      <p>{myVariable}</p>
      <p>{greet('Marco')}</p>

      <h2>What can we not display in React?</h2>
      {/* <ul><li>{{ hello: 'name' }}</li></ul> */}
      {/* <ul>Date: {new Date()}</ul> */}
      <ul>
        <li>Boolean: {true}</li>
        <li>Boolean: {false}</li>
        <li>0 : {0}</li>
      </ul>

      <h2>Conditions:</h2>
      <p>{Math.random() > 0.5 ? 'We can be displayed' : 'We cannot'}</p>
      <p>
        <ul>{arrayOfStudents}</ul>
      </p>
      <h2>Mapping over an array</h2>

      <ul>
        {countingToTen.map((number) => {
          return <li>{number}</li>
        })}
      </ul>

      <p>
        There is two ways of dealing with images, they can be eitheir in your{' '}
        <code>/public</code> forlder or in your <code>/src</code> folder
      </p>
      <h2>First cat</h2>
      <img src="/images/cat-1.jpg" alt="" />
      <h2>Second cat</h2>
      <img src={secondCat} alt="" />

      {/* <div className="card">
        <h3>Hello</h3>
        <p
          style={{
            color: 'red',
            backgroundColor: getRandomColor(),
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, architecto?
        </p>
      </div>
      <div className="card">
        <h3>Hello</h3>
        <p
          style={{
            color: 'red',
            backgroundColor: getRandomColor(),
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, architecto?
        </p>
      </div>
      <div className="card">
        <h3>Hello</h3>
        <p
          style={{
            color: 'red',
            backgroundColor: getRandomColor(),
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, architecto?
        </p>
      </div> */}

      <Card title="Hello" text="Some text" aCallbackFunction={myFunction} />
      <Card
        title="other Title here"
        text={4562}
        aCallbackFunction={myFunction}
      />
      <Card title={textToBePassedDown} aCallbackFunction={myFunction} />
    </div>
  )
}

function Card(props) {
  console.log(props.title)
  const style = {
    color: 'red',
    backgroundColor: getRandomColor(),
  }
  // if (props.aCallbackFunction) {
  //   console.log(props.aCallbackFunction())
  // }

  return (
    <div className="Card">
      <h3 onClick={props.aCallbackFunction}>{props.title}</h3>
      <p style={style}>{props.text ? props.text : 'Nothing to see here 🙃'}</p>
    </div>
  )
}

export default App
