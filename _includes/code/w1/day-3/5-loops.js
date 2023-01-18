// The good old for-loop

// Anatomy of a for-loop
// for (variable initialisation; exit condition; incrementing i) {}

for (let i = 0; i < 10; i++) {
  console.log(i)
}

const myName = 'Florian'

for (let i = 0; i < myName.length; i++) {
  console.log(myName[i])
}
/**
 * F
 * l
 * o
 * r
 * i
 * a
 * n
 */

for (let i = myName.length - 1; i >= 0; i--) {
  console.log(myName[i])
}
/**
 * n
 * a
 * i
 * r
 * o
 * l
 * F
 */

for (let i = 0; i < myName.length; i++) {
  const currentLastIndex = myName.length - 1 - i
  console.log(myName[currentLastIndex])
}
/**
 * n
 * a
 * i
 * r
 * o
 * l
 * F
 */

console.log(myName.at(-2))
// In JS, we can't access negative indexes but the `.at()` method allow us to do so.
