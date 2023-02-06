const directions = [
  'Go forward, 400m',
  'Go left at the Stop',
  'Go forward',
  'Go right at the roundabout',
]

function getDirections(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!directions[index]) {
        throw Error('No direction for this index: ', index)
      }
      resolve(directions[index])
    }, Math.random() * 1000 + 1)
  })
}

getDirections(0)
  .then((direction) => {
    console.log(direction)
    getDirections(1)
      .then((direction) => {
        console.log(direction)
        getDirections(2)
          .then((direction) => {
            console.log(direction)
            getDirections(3)
              .then((direction) => {
                console.log(direction)
              })
              .catch((error) => console.log(error))
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
  })
  .catch((error) => console.log(error))

console.time()
getDirections(0)
  .then((direction) => {
    console.log(direction)
    return getDirections(1)
  })
  .then((direction) => {
    console.log(direction)
    return getDirections(2)
  })
  .then((direction) => {
    console.log(direction)
    return getDirections(3)
  })
  .then((direction) => {
    console.log(direction)
    console.timeEnd()
    // return getDirections(4)
  })
  .catch((error) => {
    console.log(error)
  })

const arrayOfPromises = [
  getDirections(0),
  getDirections(1),
  getDirections(2),
  getDirections(3),
]

console.time('promiseAll')
Promise.all(arrayOfPromises).then((result) => {
  console.log(result)
})
console.timeEnd('promiseAll')
