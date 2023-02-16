const fetchAllButton = document.getElementById('fetch-all')
const displayedDucksSection = document.querySelector('.all-ducks')
const template = document.getElementById('template')
const createButton = document.getElementById('create-button')
const nameInput = document.getElementById('name')
const colorInput = document.getElementById('color')
const materialInput = document.getElementById('material')
const pictureInput = document.getElementById('picture')
const updateButton = document.getElementById('update-button')
const nameInputUpdate = document.getElementById('name-update')
const colorInputUpdate = document.getElementById('color-update')
const materialInputUpdate = document.getElementById('material-update')
const pictureInputUpdate = document.getElementById('picture-update')
const updateForm = document.getElementById('update-form')

/**
 * Create an instance of axios
 */
const duckApi = axios.create({
  baseURL: 'http://localhost:5005/api/rubberducks/',
})

const myUrl = 'http://localhost:5005/api/'

fetchAllButton.addEventListener('click', fetchAllDucks)
createButton.addEventListener('click', addDuckToDatabase)
updateButton.addEventListener('click', updateDuckInDatabase)

async function updateDuckInDatabase(event) {
  event.preventDefault()
  const name = nameInputUpdate.value
  const color = colorInputUpdate.value
  const material = materialInputUpdate.value
  const picture = pictureInputUpdate.value
  const duckToUpdate = {
    name,
    color,
    material,
    picture,
  }

  try {
    const response = await duckApi.patch(
      `${updateForm.dataset.id}`,
      duckToUpdate
    )
    // const response = await axios.post(`${myUrl}rubberducks`, duckToCreate)
    console.log(response)
    await fetchAllDucks()
  } catch (error) {
    console.log(error)
  }
}

async function addDuckToDatabase(event) {
  event.preventDefault()
  const name = nameInput.value
  const color = colorInput.value
  const material = materialInput.value
  const picture = pictureInput.value
  const duckToCreate = {
    name,
    color,
    material,
    picture,
  }

  try {
    const response = await duckApi.post('/', duckToCreate)
    // const response = await axios.post(`${myUrl}rubberducks`, duckToCreate)
    console.log(response)
    createDuck(response.data)
  } catch (error) {
    console.log(error)
  }
  // console.log({
  //   name,
  //   color,
  //   material,
  //   picture,
  // })
}

function createDuck(element) {
  // console.log('in my function')
  // console.log(element)
  const clone = template.content.cloneNode(true)
  clone.querySelector('h2').textContent = element.name
  // clone.querySelector('img').src = element.picture
  clone.querySelector('img').src = 'https://source.unsplash.com/random/200*200'
  clone.querySelector('p.material').textContent = element.material
  clone.querySelector('.card').style.background = element.color
  clone
    .querySelector('button.delete')
    .addEventListener('click', () => deleteDuck(element._id))
  clone
    .querySelector('button.update')
    .addEventListener('click', () => fillTheUpdateForm(element))
  displayedDucksSection.append(clone)
}

function fillTheUpdateForm(duck) {
  nameInputUpdate.value = duck.name
  colorInputUpdate.value = duck.color
  materialInputUpdate.value = duck.material
  pictureInputUpdate.value = duck.picture
  updateForm.dataset.id = duck._id
}

async function deleteDuck(id) {
  console.log(id)
  try {
    const message = await axios.delete(`${myUrl}rubberducks/${id}`)
    console.log(message)
    await fetchAllDucks()
  } catch (error) {
    console.error(error)
  }
}

async function fetchAllDucks() {
  displayedDucksSection.innerHTML = ''
  try {
    const { data } = await axios.get(`${myUrl}rubberducks`)
    // const rawResponse = await fetch(`${myUrl}rubberducks`)
    // const response = await rawResponse.json()
    for (const duck of data) {
      createDuck(duck)
    }
  } catch (error) {
    console.error(error)
  }
}
