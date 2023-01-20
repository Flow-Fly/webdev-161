// Error flow !

try {
  throw Error('This is an error')
} catch (error) {
  console.error(error.message)
}

console.log("I'm there!")
