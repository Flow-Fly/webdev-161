// rest operator

let a = 5,
  b = 6,
  c = 42

let [i, j, k] = [1, 2, 3]

function nameOfMyFunction(parameter) {}

// const sum = (...theArguments) => {}
const sum = (...rest) => {
  console.log('Rest : ', rest)
  let total = 0
  for (const number of rest) {
    // console.log(`Total: ${total}, currentNumber: ${number}`)
    total += number
  }
  console.log(total)
  return total
}

sum(4, 8, 9, 36, 2, 5, 12, 2, 5, 4, 85, 4)
sum(...[4, 8, 9, 36, 2, 5, 12, 2, 5, 4, 85, 4])
sum(5)

console.log('spreaded array: ', ...[4, 8, 9, 36, 2, 5, 12, 2, 5, 4, 85, 4])

function introduceMyselfAndMyPets(name, age, ...pets) {
  console.log(
    `Hey ther, i'm ${name}, ${age} years old and i have ${
      pets.length
    } pets, their name are ${pets.join(' ')}`
  )
}

introduceMyselfAndMyPets('Florian', 33, 'Illiu', 'Loop')

// callbacks

function goodMorning(callback) {
  console.log('Good morning!')
  callback()
}

const anotherFunction = function () {
  console.log('I am being executed!')
}

goodMorning(anotherFunction)
// function goodNight() {
//   console.log(`Good night!`)
// }

// goodMorning(goodNight)
// goodNight(goodMorning)

// goodMorning()
// goodNight()

goodMorning(() => console.log('GoodNight'))
