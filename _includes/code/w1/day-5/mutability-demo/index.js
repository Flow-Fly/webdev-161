const normalList = document.getElementById('normal')
const sortedList = document.getElementById('sorted')
const btnSort = document.getElementById('sort-list')

const students = ['John', 'Alice', 'Poe', 'Joe', 'Yoan']

const render = (list, array) => {
  let listItems = ''

  for (let item of array) {
    listItems += `<li>${item}</li>`
  }

  list.innerHTML = listItems
}

btnSort.addEventListener('click', () => {
  const copyOfStudents = structuredClone(students)
  const sortedStudents = copyOfStudents.sort()

  render(normalList, students)
  render(sortedList, sortedStudents)
})

render(normalList, students)
