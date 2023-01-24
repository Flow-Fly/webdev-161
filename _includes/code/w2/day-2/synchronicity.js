console.log('I am hungry')
console.log('Call the pizza place')
let pizza = null

orderPizza(deliverPizza)
console.log('Grab a drink')
console.log('Call a friend')

function deliverPizza() {
  console.log(`Eating ${pizza}`)
}

function orderPizza(callback) {
  console.log('We received your order')
  console.log(typeof callback)
  const timeoutId = setTimeout(() => {
    console.log('Your pizza is now ready!')
    pizza = '🍕'
    if (typeof callback === 'function') {
      callback()
    }
  }, 2000)

  if (Math.random() > 0.3) {
    clearTimeout(timeoutId)
    console.log('Order cancelled')
  }
}
