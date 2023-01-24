let a = 1

let b = a
console.log('🚀 ~ file: value-ref.js:4 ~ b', b)

b = 5
console.log('🚀 ~ file: value-ref.js:7 ~ b', b)
console.log('🚀 ~ file: value-ref.js:2 ~ a', a)

let x = [1]
let y = x
y[0] = 5

const matrice = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
]

let shallowClone = [...matrice]
// Sometime, depending of the node version, you don't yet have access to it..
// let deepCopy = structuredClone(matrice)

let stringifiedMatrice = JSON.stringify(matrice)
let deepCopy = JSON.parse(stringifiedMatrice)
console.log(
  '🚀 ~ file: value-ref.js:25 ~ stringifiedMatrice',
  stringifiedMatrice
)

let copy = JSON.parse(JSON.stringify(matrice))

console.log('🚀 ~ file: value-ref.js:26 ~ deepCopy', deepCopy)

// shallowClone[0] = 'something'
// shallowClone[1][1] = 'oh damn'

deepCopy[0] = 'something'
deepCopy[1][1] = 'oh damn'
console.log('🚀 ~ file: value-ref.js:23 ~ deepCopy', deepCopy)
console.log('🚀 ~ file: value-ref.js:19 ~ matrice', matrice)

// console.log('🚀 ~ file: value-ref.js:12 ~ y', y)
// console.log('🚀 ~ file: value-ref.js:11 ~ x', x)

/**
 * This function his greeting someone
 * @param {String} name
 * @returns
 */
function hello(name) {
  return `Hello ${name}`
}
