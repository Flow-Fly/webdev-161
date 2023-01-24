// setInterval or setTimeout Syntax:
// setInterval(callback, delay)
// setInterval && setInterval return an id (an integer)

// let count = 0

// let intervalId = setInterval(() => {
//   console.log(count)
//   if (count === 10) {
//     clearInterval(intervalId)
//   }
//   count++
// }, 500)

function faster(delay) {
  let timeoutId = setTimeout(() => {
    console.log('hey', delay)
    if (delay <= 0) {
      return clearTimeout(timeoutId)
      // return
    }
    delay -= 200
    faster(delay)
  }, delay)
}

faster(2000)
