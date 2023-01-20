// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const numbers = [9, 8, 5, 4, 6, 3, 7, 5, 10, 430]

console.log(
  numbers.sort((a, b) => {
    return a - b
  })
)

console.log(
  numbers.sort((a, b) => {
    return b - a
  })
)

const names = ['Bob', 'Alice', 'john', 'John', 'Yoan']

const copy = [...names]
copy.sort((a, b) => {
  return a.localeCompare(b)
})
console.log(copy, names)

// Sort the students by their github username
