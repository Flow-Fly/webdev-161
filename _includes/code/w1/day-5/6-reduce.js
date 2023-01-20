// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const fridge = [
  {
    name: 'tomatoes',
    price: 1,
    quantity: 6,
  },
  {
    name: 'parmigiano',
    price: 8,
    quantity: 2,
  },
  {
    name: 'zucchini',
    price: 2,
    quantity: 4,
  },
  {
    name: 'beer',
    price: 3,
    quantity: 5,
  },
]

const numbers = [1, 2, 3]

// Reduce syntax
// Array.reduce((accumulator, value) => {}, initialValue)

const total = numbers.reduce((accumulator, value) => {
  // console.log(accumulator, value)
  return accumulator + value
}, 0)

console.log(total)

const otherTotal = numbers.reduce((acc, val) => acc + val, 0)

const myFridgeValue = fridge.reduce((acc, val) => {
  // This will result into NaN
  // console.log(acc.totalValue = acc.totalValue + val.price * val.quantity)
  if (!acc.totalValue) {
    acc.totalValue = val.price * val.quantity
  } else {
    acc.totalValue += val.price * val.quantity
  }
  console.log(acc, val)
  return acc
}, {})

const myFridgeValueAgain = fridge.reduce(
  (acc, val) => {
    // This will result into NaN
    // console.log(acc.totalValue = acc.totalValue + val.price * val.quantity)

    acc.totalValue += val.price * val.quantity
    acc.items.push(val.name)

    return acc
  },
  { totalValue: 0, items: [] }
)

console.log(myFridgeValue, myFridgeValueAgain)
