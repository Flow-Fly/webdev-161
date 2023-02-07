/**
 * ! Get the express function
 */
const express = require('express')

/**
 * ! |Get the app object
 */
const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
// app.get('/about', (req, res) => {
//   res.send('Hello About World')
// })

// app.get('*', (req, res) => {
//   res.send('404 page')
// })

app.get('/', (req, res) => {
  console.log('Full path', __dirname)
  console.log(req)
  res.sendFile(__dirname + '/views/homepage.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/views/error.html')
})

app.listen(3000, () => {
  console.log('Server is live on http://localhost:3000')
})
