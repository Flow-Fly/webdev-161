/**
 * They are just true or false statements
 */

// True false table:

/**
 * And: &&
 * Or: ||
 * Greater: >
 * Lesser: <
 * GreaterOrEqual: >=
 * LesserOrEqual: <=
 * Loose Equality: ==
 * Strict Equality: ===
 */

// console.log(true && true);
// => true
// console.log(true && false);
// => false
// console.log(false && false);
// => false
// console.log(true || false);
// => true
// console.log(false || false);
// => false

// Loose equality
console.log(5 == '5')
// This is true because the double equal does not compare the type.

// Strict equality
console.log(5 === '5')
// => false

// This is not a comparison
// console.log(5 = 5)

console.log(1 < 5)

// ASCII values of J and j
//           J: 74     j: 106
console.log('John' < 'joe')

// Truthyness

const hi = 'Hello there'
console.log('5 as a bool:', Boolean(5))
console.log("'a string' as a bool:", Boolean('a string'))
console.log('a variable with a string as a bool:', Boolean(hi))
console.log('an Object as a bool:', Boolean({}))
console.log('an Array as a bool:', Boolean([]))

// Falsiness

console.log('0 as a bool:', Boolean(0))
//  => 0 evaluate to false
console.log("'' as a bool:", Boolean(''))
// => an empty String evaluate to false!
console.log('undefined as a bool:', Boolean(undefined))
console.log('null as a bool:', Boolean(null))
console.log('false as a bool:', Boolean(false))

// Quirky quirky JS..
console.log(true + true + true)
// => 3 !
