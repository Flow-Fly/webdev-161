console.log('hello !')
console.error('Error')
console.warn('Warning')

try {
  throw Error('This is an error')
} catch (error) {
  console.error(error.message)
}

console.log("I'm there!")
