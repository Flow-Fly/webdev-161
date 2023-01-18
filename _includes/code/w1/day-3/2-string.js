/**
 * We want to be able to "write text"
 * (And a bit of coercion, casting/conversion, search)
 */

/**
 * single quotes: ''
 * double quotes: ""
 * backticks: ``
 */

const futureOperation = "I'll drink a coffee"

const hello = 'Hello'
;('prettier-ignore')
const squadNumber = 'Squad-161'
const teachingStaff = `Ines, Haroun, Florian`

//  Concatenation
console.log(hello + ' ' + squadNumber + ' ' + teachingStaff)

//  Template literal

const greetings = `${hello} ${squadNumber} ${teachingStaff}! We are a grand total of: ${
  23 + 3
}`

console.log(greetings.length)
console.log(greetings.toUpperCase())

console.log(greetings.toLowerCase().includes('florian'))

/**
 * Operations order:
 * -> toLowerCase get executed
 * "hello squad-161 ines, haroun, florian".includes("florian")
 * -> includes get executed
 * true
 */

console.log(futureOperation.replace('coffee', 'tea'))

console.log(hello[99])
console.log(hello[4].toUpperCase())
// console.log(hello[99].toUpperCase());
/**
 * undefined.toUpperCase()
 */

// EXTRA: out of a discussion during the break. This is not important to the course
// It's just fun little behaviour when you're more confortable with JS !

/**
 * Extra stuff discussed during the break
 * a String created with quotes will have a type of "string"
 * a string created with the *new String* constructor will have a type of "object"
 * you will never create a string with this "new String" 😊
 */

console.log(typeof 'aString')
console.log(typeof new String('hey'))

// Modifying the replace method in the String constructor 🤯

String.prototype.replace = () => 'hey'

console.log('string'.replace())

// Creating some documentation for a function

/**
 * This is a sum function
 * @return {Number} The sum of a + b
 * @param {Number} a
 * @param {Number} b
 */
function sum(a, b) {
  return a + b
}
