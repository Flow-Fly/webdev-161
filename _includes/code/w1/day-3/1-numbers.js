/**
 * Let's talk about Math
 */

/**
 * Operators:
 * addition: +
 * substraction: -
 * multiply: *
 * division: /
 * powerof: **
 * modulo: %
 */

let classSize = 23

const increasedClassSize = classSize + 1
console.log('classSize:', classSize)
console.log('increasedClassSize', increasedClassSize)

/**
 * Those two ways of reassigning a variable are the same
 * The second one is just a shorthand notation
 */
classSize = classSize + 1

classSize += 1

// classSize -= 1;
// classSize /= 1;
// classSize *= 2;

console.log(10 - 5)

console.log(2 / 3)

console.log('modulo: ', 7 % 3)

console.log(125 % 60)
// Order of operations

console.log(2 + 3 * 5)
// 2 + 15
// 17

// Getting some random number

console.log('Math floor', Math.floor(1.7))
console.log('Math ceil', Math.ceil(1.7))
console.log('Math round', Math.round(1.7))

console.log(Math.random())

const myRandomNumber = Math.floor(Math.random() * 10)

const firstOperation = Math.random()
const secondOperation = firstOperation * 10
const thirdOperation = Math.floor(secondOperation)

/**
 * Math.floor(0.2546854 * 10)
 * Math.floor(2.546854)
 * 2
 */

console.log('Random integer in a range: ', myRandomNumber)

const five = 5

console.log(typeof NaN)
// NaN is actually a number

console.log(2 * 'Loop')
// This is not a valid operation and will result to NaN

console.log('1' + 5)
// "15"
console.log(+'1' + 5)
// 6
console.log(5 - '1')
// 4
console.log(3 * '5')
// 15

// Incrementing / Decrementing numbers

let myNumber = 0
// Post-incrementation, return the current value.
myNumber++

console.log('myNumber: ', myNumber)
// Since this is post-incrementation, we can't directly see the updated number.
console.log(myNumber++)

// Pre-incrementation will increment the number and return the updated value.
console.log(++myNumber)
