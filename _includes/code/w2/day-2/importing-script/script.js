console.log('Hello js and html')

const practice = [
  'Wax on wax off',
  'Being confortable not being confortable',
  'rinse and repeat',
  'taking breaks',
  'eating',
  'have fun creating weird examples',
  'read the lesson',
  'ask questions',
]

const counterElement = document.querySelector('#main > h2')

let counter = 0

let intervalId = setInterval(() => {
  counterElement.textContent = practice[counter]
  counter++
  if (counter === practice.length) {
    counter = 0
  }
}, 1500)

// Create a counter which increment every
// second up to 10 and startback at 0
// setInterval will be needed

// const oneLi = document.querySelector('ul > li')
// const multiplesLi = document.querySelectorAll('ul > li')
// console.log(oneLi)
// console.log('🚀 ~ file: script.js:6 ~ multiplesLi', multiplesLi)
