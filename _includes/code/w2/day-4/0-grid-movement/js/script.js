const audio = new Audio('./assets/puddle-footstep.mp3')
const startButton = document.getElementById('start-game')
// audio.play()
startButton.addEventListener('click', () => {
  audio.play()
})

// // window.addEventListener('keydown', (event) => {
// //   console.table({ key: event.key, keyCode: event.keyCode, code: event.code })
// // })

// /**
//  * First step: Create a grid programatically
//  *  -> Instert it inside my html
//  */

// const gridElement = document.getElementById('grid')
// const scoreElement = document.getElementById('score')
// const modal = document.getElementById('dialog')
// const resetButton = modal.querySelector('button')

// const columns = 10
// const rows = 10
// let cells = []
// let currentPosition = 0
// let score = 0

// function startTheGame() {
//   modal.close()
//   score = 0
//   gridElement.innerHTML = ''
//   cells = []
//   currentPosition = 0
//   displayScore()

//   createTheGrid()
//   displayPlayer(currentPosition)
//   createEnemies(6)
//   // console.log(cells)
// }

// function createTheGrid() {
//   for (let i = 0; i < columns * rows; i++) {
//     createCell()
//   }
// }

// function createCell() {
//   const div = document.createElement('div')
//   div.classList.add('cell')
//   gridElement.append(div)
//   cells.push(div)
// }

// function createEnemies(num) {
//   const copy = [...cells]
//   copy.splice(currentPosition, 1)

//   for (let i = 0; i < num; i++) {
//     const randomIndex = Math.floor(Math.random() * copy.length)
//     const randomCell = copy[randomIndex]
//     copy.splice(randomIndex, 1)
//     randomCell.classList.add('bad')
//   }
// }

// /**
//  * Display the player
//  */

// function displayPlayer(position) {
//   cells[position].classList.add('player')
// }

// /**
//  * Move the player
//  */

// window.addEventListener('keydown', (event) => {
//   // console.table({ key: event.key, code: event.code })

//   switch (event.code) {
//     case 'ArrowLeft':
//       if (currentPosition % 10 === 0) {
//         return
//       }
//       hidePlayer()
//       currentPosition--

//       displayPlayer(currentPosition)
//       break
//     case 'ArrowUp':
//       if (currentPosition < 10) {
//         return
//       }
//       hidePlayer()
//       currentPosition -= 10

//       displayPlayer(currentPosition)
//       break

//     case 'ArrowDown':
//       if (currentPosition >= 90) {
//         return
//       }
//       hidePlayer()
//       currentPosition += 10
//       displayPlayer(currentPosition)
//       break
//     case 'ArrowRight':
//       if ((currentPosition + 1) % 10 === 0) {
//         return
//       }
//       hidePlayer()
//       currentPosition++
//       displayPlayer(currentPosition)
//       break
//   }

//   // This is executed after having moved
//   if (checkIfEnemy(currentPosition)) {
//     score += 10
//     displayScore()
//     removeEnemy(currentPosition)
//   }
//   if (gameIsFinished()) {
//     endGame()
//   }
// })

// function endGame() {
//   setTimeout(() => {
//     modal.showModal()
//   }, 200)
// }

// function checkIfEnemy(position) {
//   return cells[currentPosition].classList.contains('bad')
// }

// function hidePlayer() {
//   cells[currentPosition].classList.remove('player')
// }

// function removeEnemy(position) {
//   cells[position].classList.remove('bad')
// }

// function gameIsFinished() {
//   return document.querySelectorAll('.bad').length === 0
// }

// function displayScore() {
//   scoreElement.textContent = score
// }

// /**
//  *
//  *   0  1  2  3  4  5  6  7  8  9
//  * |  |  |  |  |  |  |  |  |  |  |
//  * 10  11 12 13 14 15 16 17 18 19
//  * |  |  |  |  |  |  |  |  |  |  |
//  */

// startButton.addEventListener('click', startTheGame)
// resetButton.addEventListener('click', startTheGame)
