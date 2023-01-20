// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numbers = [1, 2, 5, 4, 6, 3]

let myNewArray = []
for (const num of numbers) {
  myNewArray.push(num * 2)
}

const doubledNumbers = numbers.map((number) => {
  return number * 2
})

const tripledNumbers = numbers.map((element) => element * 3)

const students = [
  {
    name: 'Bob',
    age: 24,
  },
  {
    name: 'Alice',
    age: 31,
  },
]

const resultArray = students.map((student) => {
  return `Students name: ${student.name}, his/her age is: ${student.age}`
})
//  I want to iterate over this student array and I would like this output:
// ["Student name: XXX, his/her age is: XXX","Student name: XXX, his/her age is: XXX", ]
console.log(resultArray)

console.log(numbers, doubledNumbers)

const today = new Date()
console.log(today.getFullYear() - 31)

// Let's add the year of birth of everysingle students

const updatedStudents = students.map((student) => {
  const dateOfBirth = today.getFullYear() - student.age
  student.dateOfBirth = dateOfBirth
  return student
})

console.log(updatedStudents, students)

const myArray = [1, [5, { key: 'Some value that we dont want to change' }], 3]
const copyOfArray = structuredClone(myArray)

copyOfArray[1][0] = 10
copyOfArray[1][1].key = 'Modified !'
console.log(myArray)
console.log(copyOfArray)

// Create a new Array where each element is structured like so:
// [
// {
//   name: nameOfTheStudent,
//   username: githubUsernameOfTheStudent
// },
// {
//   name: nameOfTheStudent,
//   username: githubUsernameOfTheStudent
// },
// {
//   name: nameOfTheStudent,
//   username: githubUsernameOfTheStudent
// },
// {
//   name: nameOfTheStudent,
//   username: githubUsernameOfTheStudent
// },
// ...
// ]

const studentsExercise = [
  {
    name: 'Arthur',
    morningSunshine: {
      date: '2023-02-14T00:00:00.000Z',
    },
    github: {
      username: 'Chaudoreille',
      link: 'https://github.com/Chaudoreille',
    },
    projects: [],
  },
  {
    name: 'Cedric',
    morningSunshine: {
      date: '2023-01-23T00:00:00.000Z',
    },
    github: {
      username: 'cedchate',
      link: 'https://github.com/cedchate',
    },
    projects: [],
  },
  {
    name: 'Christ',
    morningSunshine: {
      date: '2023-03-02T00:00:00.000Z',
    },
    github: {
      username: 'Mershouta',
      link: 'https://github.com/Mershouta',
    },
    projects: [],
  },
  {
    name: 'Delfina',
    morningSunshine: {
      date: '2023-01-20T00:00:00.000Z',
    },
    github: {
      username: 'dolphinstreet',
      link: 'https://github.com/dolphinstreet',
    },
    projects: [],
  },
  {
    name: 'Emmanuelle',
    morningSunshine: {
      date: '2023-02-09T00:00:00.000Z',
    },
    github: {
      username: 'avengingtooth',
      link: 'https://github.com/avengingtooth',
    },
    projects: [],
  },
  {
    name: 'Fabien',
    morningSunshine: {
      date: '2023-01-27T00:00:00.000Z',
    },
    github: {
      username: 'bef4455',
      link: 'https://github.com/bef4455',
    },
    projects: [],
  },
  {
    name: 'Hiromi',
    morningSunshine: {
      date: '2023-03-07T00:00:00.000Z',
    },
    github: {
      username: 'rominamarmontel',
      link: 'https://github.com/rominamarmontel',
    },
    projects: [],
  },
  {
    name: 'Ismet',
    morningSunshine: {
      date: '2023-02-16T00:00:00.000Z',
    },
    github: {
      username: 'ismetmedj',
      link: 'https://github.com/ismetmedj',
    },
    projects: [],
  },
  {
    name: 'Jean-Luc',
    morningSunshine: {
      date: '2023-01-24T00:00:00.000Z',
    },
    github: {
      username: 'jltp2c',
      link: 'https://github.com/jltp2c',
    },
    projects: [],
  },
  {
    name: 'Keifer',
    morningSunshine: {
      date: '2023-01-26T00:00:00.000Z',
    },
    github: {
      username: 'keifershearer',
      link: 'https://github.com/keifershearer',
    },
    projects: [],
  },
  {
    name: 'Kilian',
    morningSunshine: {
      date: '2023-02-13T00:00:00.000Z',
    },
    github: {
      username: 'lekix-lekix',
      link: 'https://github.com/lekix-lekix',
    },
    projects: [],
  },
  {
    name: 'Loïc',
    morningSunshine: {
      date: '2023-03-01T00:00:00.000Z',
    },
    github: {
      username: 'LoicMessela',
      link: 'https://github.com/LoicMessela',
    },
    projects: [],
  },
  {
    name: 'Lucie',
    morningSunshine: {
      date: '2023-02-28T00:00:00.000Z',
    },
    github: {
      username: 'Lucie-Lanssade',
      link: 'https://github.com/Lucie-Lanssade',
    },
    projects: [],
  },
  {
    name: 'Tom',
    morningSunshine: {
      date: '2023-02-06T00:00:00.000Z',
    },
    github: {
      username: 'mahettom',
      link: 'https://github.com/mahettom',
    },
    projects: [],
  },
  {
    name: 'Marianne',
    morningSunshine: {
      date: '2023-02-27T00:00:00.000Z',
    },
    github: {
      username: 'Magdev98',
      link: 'https://github.com/Magdev98',
    },
    projects: [],
  },
  {
    name: 'Mehdi',
    morningSunshine: {
      date: '2023-02-08T00:00:00.000Z',
    },
    github: {
      username: 'eddira',
      link: 'https://github.com/eddira/',
    },
    projects: [],
  },
  {
    name: 'Michael',
    morningSunshine: {
      date: '2023-01-25T00:00:00.000Z',
    },
    github: {
      username: 'TheMike1972',
      link: 'https://github.com/TheMike1972',
    },
    projects: [],
  },
  {
    name: 'Phu',
    morningSunshine: {
      date: '2023-03-06T00:00:00.000Z',
    },
    github: {
      username: 'PhuKaRY',
      link: 'https://github.com/PhuKaRY',
    },
    projects: [],
  },
  {
    name: 'Sebastian',
    morningSunshine: {
      date: '2023-03-03T00:00:00.000Z',
    },
    github: {
      username: 'Mottschi',
      link: 'https://github.com/Mottschi',
    },
    projects: [],
  },
  {
    name: 'Soizic',
    morningSunshine: {
      date: '2023-02-15T00:00:00.000Z',
    },
    github: {
      username: 'SoizicCistac',
      link: 'https://github.com/SoizicCistac',
    },
    projects: [],
  },
  {
    name: 'Sophie',
    morningSunshine: {
      date: '2023-02-10T00:00:00.000Z',
    },
    github: {
      username: 'So-Mina',
      link: 'https://github.com/So-Mina',
    },
    projects: [],
  },
  {
    name: 'Thomas',
    morningSunshine: {
      date: '2023-02-17T00:00:00.000Z',
    },
    github: {
      username: 'lessacs',
      link: 'https://github.com/lessacs',
    },
    projects: [],
  },
  {
    name: 'Vishnu',
    morningSunshine: {
      date: '2023-02-07T00:00:00.000Z',
    },
    github: {
      username: 'VishnuSobhana',
      link: 'https://github.com/VishnuSobhana',
    },
    projects: [],
  },
]

const output = studentsExercise.map((student) => {
  return { name: student.name, username: student.github.username }
  // const studentObject = {
  //   name: student.name,
  //   username: student.github.username,
  // }
  // return studentObject
})

console.log(output)
