/**
 * Select all the element you will need at the beginning of the file, remember to
 * select the elements, not their value / textContent...
 */
const counterElement = document.querySelector('.counter')
const incrementButton = document.getElementById('increment-button')
const decrementButton = document.querySelector('#decrement-button')

let counter = 0

incrementButton.addEventListener('click', (event) => {
  console.log(event)
  counter++
  // let currentCounter = Number(counterElement.textContent)
  // currentCounter++
  counterElement.textContent = counter
})
decrementButton.addEventListener('click', (event) => {
  console.log('clickty click')

  // if my counter is 0, don't do anything
  if (counter === 0) {
    return
  }
  counter--
  // let currentCounter = Number(counterElement.textContent)
  // currentCounter++
  counterElement.textContent = counter
})

/**
 * Different ways of adding event listeners
 */
const secondExampleButtons = document.querySelectorAll('.button-second-example')
secondExampleButtons.forEach((buttonElement) => {
  buttonElement.addEventListener('click', () => console.log('hello'))
})
const onClickButton = document.querySelector('.onclick')

onClickButton.onclick = () => console.log('yay')
const namedFunctionButton = document.querySelector(
  '.button-second-example.named-function'
)
namedFunctionButton.addEventListener('click', doSomething)

// Creating events:
// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
function doSomething(event) {
  // console.log(this)
  const element = event.target
  console.log(`Hello ${element.dataset.name}`)
}

const buttonWithMultipleEvents = document.getElementById('multiple-event')
const buttonWithOneEvent = document.getElementById('one-event')

for (let i = 0; i < 10; i++) {
  buttonWithMultipleEvents.addEventListener('click', () =>
    console.log('clicked')
  )
  buttonWithOneEvent.addEventListener('click', clickedOnce)
}
function clickedOnce(event) {
  console.log('one click')
}
const aFunction = function () {}

/**
 * Add an event listener to the button
 */
const myButton = document.getElementById('my-button')
const removeLastElementButton = document.getElementById('remove-last-element')
const containerElement = document.querySelector('.container')

myButton.addEventListener('click', createASquare)
removeLastElementButton.addEventListener('click', removeLastSquare)

function createASquare(event) {
  const square = document.createElement('div')
  square.classList.add('square')
  console.log(square)
  containerElement.append(square)
  square.addEventListener('click', () => {
    square.classList.toggle('selected')
  })
}
/**
 * Removing the last square
 */

function removeLastSquare(event) {
  const lastSquare = document.querySelector('.square:last-child')
  lastSquare.remove()
}

const removeSelectedButton = document.getElementById('remove-selected')
removeSelectedButton.addEventListener('click', removeSelectedSquares)

function removeSelectedSquares(event) {
  const selectedSquares = document.querySelectorAll('.square.selected')
  selectedSquares.forEach((element) => {
    element.remove()
  })
}
