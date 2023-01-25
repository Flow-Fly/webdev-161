/**
 * Get an element with getElementById (the id you provide must match an element with that id in the HTML 😁)
 */

const titleElement = document.getElementById('title')
console.log(titleElement)

/**
 * Adding some text to the Title, the html tags are not parsed, they are read as text.
 */

titleElement.textContent += '!!! <span>This is a span! </span>'

titleElement.innerHTML += `<small>This with innerHTML</small>
<script>
  console.log('What the hell')
</script>
`
// console.log(titleElement.textContent)
// console.log(titleElement.innerText)
/**
 * Select the first section and store it in a variable
 */

const sectionElement = document.querySelector('section')

/**
 * Select all of the elements with a .student class that are inside of the section element
 */
// With querySelectorAll
const studentsElements = sectionElement.querySelectorAll('.student')
const studentsElementsWithClassName =
  sectionElement.getElementsByClassName('student')

const listOfStudents = document.querySelector('ul.students')
listOfStudents.innerHTML += '<li class="student">Bar</li>'

// console.log('🚀 ~ file: index.js:32 ~ students', studentsElements)
// // with getElementsByClassName

// console.log(
//   '🚀 ~ file: index.js:35 ~ studentsElementsWithClassName',
//   studentsElementsWithClassName
// )
// adding a new student with innerHTML

/**
 * More complex selector, the paragraph which are not important.
 * Adding a new class
 */

const unimportantParagraph = document.querySelector(
  '.paragraph:not(.important):nth-of-type(2)'
)
console.log(unimportantParagraph)

/**
 * Toggle a class
 */
unimportantParagraph.classList.toggle('important')
unimportantParagraph.classList.toggle('important')
// unimportantParagraph.classList.toggle('important')

/**
 * Selecting an element with multiple classes
 */

const elementWithMultipleClasses = document.querySelector(
  '.paragraph.important'
)

/**
 * Modifying the style of the element in a CSS-like way
 */

elementWithMultipleClasses.style = `
  color: whitesmoke;
  font-size: 2rem;
`

/**
 * Modifying the style of a specific property of the element
 */

elementWithMultipleClasses.style.backgroundColor = 'hsla(20, 50%, 75%, 75%)'

/**
 * Set a custom attribute
 */

elementWithMultipleClasses.setAttribute('href', '#title')

/**
 * Modify / Read / Create some data-* attributes
 */

console.log(elementWithMultipleClasses.dataset)

elementWithMultipleClasses.dataset.id = '1246gw8v1331d8gw13w4gdds61'

elementWithMultipleClasses.dataset.domIsGreat = true
