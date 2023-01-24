// General scope

// This is a new scope
if (true) {
  let hello = 'hello'
  // Another one
  for (let i = 0; i < 3; i++) {
    let hello = 'Hello again!'
    console.log(hello)
  }
  console.log(hello)
}

// console.log(hello)

// Fuctions have scopes
function doSomething() {}

const numbers = [1, 2, 5, 4, 6, 3, 1]

// numbers.forEach((numbers) => {
//   console.log(numbers)
// })

const matrice = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
]

for (let i = 5; i < 10; i++) {
  console.log('Outer scope: ', i)
  for (let i = 0; i < 5; i++) {
    console.log('inner scope: ', i)
    // matrice[i][i]
  }
}

// console.log(myVariable)

// let myVariable = 'Hey there!'

const politeGreet = function (name) {
  return `Hello ${name}! How are you?`
}

console.log(politeGreet('Marianne'))
const rudeGreet = (name) => `Hey ${name}.`
console.log(rudeGreet('Marianne'))

console.log(greet('Marianne'))

function greet(name) {
  return `Hello ${name}!`
}

// console.log(bad)

// var bad = "dont' use me"

// console.log(bad)
if (true) {
  var bad = 'hello'
  console.log(bad)
  // Another one
  if (true) {
    let exist = true
    var bad = 'What the hell'
  }
  console.log(exist)
  console.log(bad)
}

var myName = 'flo'

for (var myName = 0; myName < 2; myName++) {}

console.log(myName)
