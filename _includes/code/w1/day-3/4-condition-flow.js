const itIsWednesday = false

if (itIsWednesday) {
  console.log('Yes !')
} else {
  console.log('It is an other day')
}

// In a normal world -> false
const tenIsGreaterThanAHundred = 10 > 100

if (tenIsGreaterThanAHundred) {
  console.log("Math, is turning in it's grave")
} else {
  console.log('We live in a world were 10 is less than 100')
}

if ('hello'.length > 'abc'.length) {
  console.log('hello is longer than abc')
}

const itIsTuesday = false

if (itIsTuesday) {
  console.log('This is true')
} else if (itIsWednesday) {
  console.log("It's wednesday")
} else {
  console.log('an other day')
}
