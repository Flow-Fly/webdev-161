// 4 types of functions

// "Classic one": function declaration++
// function expression
// Arrow functions++
// generator functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

/**
 * Function syntax:
 */

// Not used a lot since ES6
const functionExpression = function (parameters) {}

functionExpression()

function myFunctionName(parameter1, parameter2) {
  /**
   * Whatever this function need to do
   */
  console.log('Hello ! I am in the function body!')
  // If there is no return, the function will return undefined
  return `${parameter1}, ${parameter2}`

  console.log('I will not be printed')
}

let returnedStatement = myFunctionName(57, 64)

console.log(returnedStatement)

// maxOf

function maxOf(a, b) {
  // console.log(arguments)
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error(
        'You definitely should use this function to just compare numbers'
      )
    }
  } catch (error) {
    console.log(error.message)
  }

  if (a > b) {
    return a
  } else if (b > a) {
    return b
  } else {
    return `${a} and ${b} are equals`
  }
}

console.log(maxOf(27, 52))
console.log(maxOf(32, 12))
console.log(maxOf(5, 5))
console.log(maxOf(-5, 5))
console.log(maxOf('hello', 5))

// Oldest
const students = [
  {
    name: 'Alice',
    age: 43,
    passions: ['football', 'skate', 'painting'],
  },
  {
    name: 'John',
    age: 64,
    passions: ['football', 'rollerblading', 'photo-shooting'],
  },
  {
    name: 'Phu',
    age: 30,
    passions: ['web-3', 'skate', 'skiing'],
  },
  {
    name: 'Bar',
    age: 72,
  },
]

/**
 * Classic for loop
 */
for (let i = 0; i < students.length; i++) {
  const student = students[i]
  console.log(student.name)
}

/**
 * for - of loop
 * The idea is that we will get the element we are iterating on instead of just getting an index.
 */
for (const student of students) {
  console.log(student.name)
}

// const findOldestStudentAsExpression = function (arrayOfStudents) {}
const findOldestStudent = (arrayOfStudents) => {
  if (!arrayOfStudents.length) {
    return
  }

  let oldestStudent = arrayOfStudents[0].age
  // console.log(oldestStudent)
  for (const student of arrayOfStudents) {
    console.log('In the for loop: ', student)
    if (oldestStudent < student.age) {
      oldestStudent = student.age
    }
  }
  return oldestStudent
}

const oldestStudent = findOldestStudent(students)
console.log('🚀 ~ file: 3-functions.js:94 ~ oldestStudent', oldestStudent)

const test = findOldestStudent([])
const test2 = findOldestStudent([{ age: 99 }])
console.log(test)

// Average

function averageAge(arrayOfStudents) {
  // arrayOfStudents is the Array which was passed as argument to the
  // averageAge function.
  let sum = 0
  for (const student of arrayOfStudents) {
    sum += student.age
  }
  return (sum / arrayOfStudents.length).toFixed(2)
  // const average = sum / arrayOfStudents.length
  // return average.toFixed(2)
}

console.log(averageAge(students))
