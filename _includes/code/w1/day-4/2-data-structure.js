const students = [
  {
    name: 'Alice',
    age: 43,
    passions: ['football', 'skate', 'painting'],
  },
  {
    name: 'John',
    age: 34,
    passions: ['football', 'rollerblading', 'photo-shooting'],
  },
  {
    name: 'Phu',
    age: 30,
    passions: ['web-3', 'skate', 'skiing'],
  },
]

console.log(students[2].passions[2])

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// [  0  1  2
//   [1, 2, 3],   0
//   [4, 5, 6],   1
//   [7, 8, 9],   2
// ]

console.log('Accessing a value inside a matrice: ', matrix[1][2])
