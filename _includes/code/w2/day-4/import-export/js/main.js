import theExportedFunction from './utils.js'

import { a, b } from './utils.js'

const letters = document.querySelectorAll('.letter')

letters.forEach((letter) => {
  setInterval(() => {
    letter.style.color = theExportedFunction()
  }, 500)
})

console.log(a, b, theExportedFunction)
