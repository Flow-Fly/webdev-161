// export default function getRandomColor() {
//   return `rgb(${randomColorInt()}, ${randomColorInt()}, ${randomColorInt()})`
// }
function getRandomColor() {
  return `rgb(${randomColorInt()}, ${randomColorInt()}, ${randomColorInt()})`
}

const importantValue = 'Let us split our files!'
function randomColorInt() {
  return Math.random() * 256
}

export let a = 'a value'
export let b = 'an other value'

// export { a, b }
export default getRandomColor
