function sleep(delay = 250) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

const passTheTest = () => Math.random() > 0.3

function meetSuperman(delay = 250) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        return resolve('You met Superman at the supermarket.')
      }
      reject('You never met Superman, the end.')
    }, delay)
  })
}
function revealYourTrueNature(delay = 250) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        return resolve('You are a Super Hero and will help the World!')
      }
      reject("You can always try again later, but you're not a super-hero yet")
    }, delay)
  })
}
function keepGrinding(delay = 250) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        return resolve(
          'You kept grinding, training, You will get another shot!'
        )
      }
      reject(`You took an arrow in the knee while training.`)
    }, delay)
  })
}

// pyramidStory()
// fetchChuck()
console.log('Hey')
const buttonElement = document.getElementById('btn')
const chuckJoke = document.getElementById('chuck-joke')
buttonElement.addEventListener('click', fetchChuck)

async function fetchChuck() {
  try {
    const res = await fetch('https://bwjbnwkbnvkjwbvjwvw.com')
    const content = await res.json()
    console.log(content)
    chuckJoke.textContent = content.value
  } catch (error) {
    console.log(error)
  }
}

fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((finalResponse) => {
    chuckJoke.textContent = finalResponse.value
  })
  .catch((error) => {
    console.error(error)
  })

// console.log(asyncStory())
async function asyncStory() {
  try {
    const message = await meetSuperman(1000)
    console.log(message)
    if (passTheTest()) {
      const finalMessage = await revealYourTrueNature(1000)
      return console.log(finalMessage)
    }
    const trainingMessage = await keepGrinding(1000)
    console.log(trainingMessage)
  } catch (error) {
    console.log('in Error')
    console.log(error)
  }
}

// pyramidStory()
function pyramidStory() {
  meetSuperman()
    .then((message) => {
      console.log(message)
      if (passTheTest()) {
        console.log('You passed the test')
        revealYourTrueNature(1000)
          .then((message) => {
            console.log(message)
          })
          .catch((message) => {
            console.log(message)
          })
      }
      console.log('You failed the test')
      keepGrinding(2000)
        .then((message) => {
          console.log(message)
        })
        .catch((message) => {
          console.log(message)
        })
    })
    .catch((message) => {
      console.log(message)
    })
}

function neverAgain() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        return resolve('You met Superman at the supermarket.')
      }
      reject('You never met Superman, the end.')
    }, 250)
  })
    .then((message) => {
      console.log(message)
      if (passTheTest()) {
        console.log('You passed the test')
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.7) {
              return resolve('You are a Super Hero and will help the World!')
            }
            reject(
              "You can always try again later, but you're not a super-hero yet"
            )
          }, 1000)
        })
          .then((message) => {
            console.log(message)
          })
          .catch((message) => {
            console.log(message)
          })
      }
      console.log('You failed the test')
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.7) {
            return resolve(
              'You kept grinding, training, You will get another shot!'
            )
          }
          reject(`You took an arrow in the knee while training.`)
        }, 2000)
      })
        .then((message) => {
          console.log(message)
        })
        .catch((message) => {
          console.log(message)
        })
    })
    .catch((message) => console.log(message))
}

// const aPromise = new Promise((resolve, reject) => {
//   /**
//    * Promise states:
//    * When created: the state is Pending
//    * When resolved the state is fullfilled
//    * When rejected: the state is rejected
//    */
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       console.log('Resolve block')
//       resolve('The promise was reolved')
//     } else {
//       console.log('Reject block')
//       reject('We got rejected!')
//     }
//   }, 1500)
// })

// aPromise
//   .then((message) => {
//     console.log(message)
//   })
//   .catch((message) => {
//     console.log(message)
//   })
//   .finally(() => {
//     console.log('The promise cycle is finished')
//   })

// awful()
function awful() {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      console.log('You met Superman at the supermarket.')
      if (passTheTest()) {
        console.log('You passed the test')
        return setTimeout(() => {
          if (Math.random() > 0.7) {
            return console.log('You are a Super Hero and will help the World!')
          }
          return console.log(
            "You can always try again later, but you're not a super-hero yet :("
          )
        }, 1000)
      }
      console.log('You failed the test')
      return setTimeout(() => {
        if (Math.random() > 0.7) {
          return console.log(
            'You kept grinding, training, You will get another shot!'
          )
        }
        return console.log(`You took an arrow in the knee while training.`)
      }, 2000)
    }
    console.log('You never met Superman, the end.')
  }, 250)
}

// function sleep(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, delay)
//   })
// }

// await sleep(500)
