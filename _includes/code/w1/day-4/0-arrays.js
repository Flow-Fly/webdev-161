// Declaring an Array
const studentsArray = []

const anOtherDeclaredArray = [5, 'name', studentsArray, false, null, undefined]

console.log(anOtherDeclaredArray)

console.log(anOtherDeclaredArray[0])
console.log(anOtherDeclaredArray.length)

// Adding new elements to an Array
studentsArray.push('Ismet', undefined, 'Sophie')
studentsArray.unshift('Emanuelle')
studentsArray[7] = 'Leo'

// Reassigning elements to an Array

studentsArray[4] = 'Jean-Luc'

// console.log(studentsArray)
studentsArray.pop()
// console.log(studentsArray)
studentsArray.shift()
// console.log(studentsArray.length)
// Looping over an Array

const copyOfStudentsArray = studentsArray.slice()

let amountOfRemovedElements = 0

for (let i = 0; i < studentsArray.length; i++) {
  const element = studentsArray[i]
  if (!element) {
    studentsArray.splice(i, 1)
    i--
  }
  // console.log(studentsArray[i], copyOfStudentsArray[i])
  // const element = studentsArray[i]

  // if (!element) {
  //   copyOfStudentsArray.splice(i - amountOfRemovedElements, 1)
  //   amountOfRemovedElements++
  // }
}

for (const name of studentsArray.reverse()) {
  console.log(name)
}

const value = studentsArray.forEach(function (name, i, array) {
  console.log(name, i, array)
  return 'hey'
})

console.log(value)

// console.log(studentsArray)
// console.log(copyOfStudentsArray)
// console.log(studentsArray.filter(Boolean))

// Removing from an Array

// Copying an Array

const anotherCopy = studentsArray.map((el) => el)
const copyWithStructuredClone = structuredClone(studentsArray)
// console.log('copy: ', copyWithStructuredClone)

const simpleArray = [1, 2, 3]

const copyOfSimpleArray = simpleArray
const aRealCopy = structuredClone(simpleArray)
aRealCopy[1] = 'Nothing change in the original array'
copyOfSimpleArray[0] = 'not a copy'

// console.log(simpleArray)

const test = [null, undefined]

const newCopy = structuredClone(test)
console.log(
  '🚀 ~ file: 0-arrays.js:81 ~ newCopy',
  JSON.parse(JSON.stringify(test))
)
