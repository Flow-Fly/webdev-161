// Declare an Object
const paris = {
  isThereAStrike: false,
  inhabitantsName: 'Parisians',
  inhabitants: 2000000,
  key: 'I have the key of the city!',
  // something: value
}

console.log(paris.isThereAStrike)
console.log(paris.something)

// Add new keys to an Object
paris.monuments = [
  {
    name: 'Eiffel Tower',
    constructionDate: 1889,
  },
  {
    name: 'Pantheon',
    constuctionDate: 1790,
  },
]

console.log(paris['inhabitants'])

const randomVariable = 'inhabitants'

paris.randomVariable // undefined
// The key randomVariable does no exist
paris[randomVariable] // 2000000
// randomVariable evaluate to 'inhabitants' => 20000000

const student = {
  name: 'Bob',
  age: 33,
  address: {
    city: 'Code-city',
    postalCode: 42,
    streetNumber: 'Coding street',
  },
}

const otherStudent = {
  'student name': 'John',
}

otherStudent['student name']

console.log(student.address.postalCode)

console.log(paris.monuments[1].name)

// Reassign a value to a key

paris.isThereAStrike = true

// Remove keys

delete paris.isThereAStrike

// console.log(paris)

// Looping over an object

for (const key in paris) {
  // We want to iterate over any found array
  // console.log(Array.isArray(paris[key]))
  if (Array.isArray(paris[key])) {
    console.log('We are going to iterate over all the elements in this array')
    paris[key].forEach(function (element) {
      console.log(element)
    })
  }
}

console.log(Object.keys(paris))
// console.log(Object.values(paris))

// console.log('Object entries:', Object.entries(paris))
// console.log(student)
