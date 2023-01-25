const h2Element = document.querySelector('h2')
const inputElement = document.querySelector('input[type="text"]')

inputElement.addEventListener('input', (event) => {
  console.log(event.target.value)
  h2Element.textContent = event.target.value
})
// inputElement.addEventListener('keypress', (event) => {
//   console.log(event.target.value)
// })
