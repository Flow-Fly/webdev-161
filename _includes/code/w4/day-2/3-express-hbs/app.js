const express = require('express')

const app = express()

/**
 * Express configuration
 */
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Main page',
  })
})
app.get('/about', (req, res) => {
  const studentArray = [
    { name: 'Bob', age: 24 },
    { name: 'Alice', age: 31 },
    { name: 'John', age: 42 },
  ]
  res.render('about', {
    students: studentArray,
    age: 40,
    title: 'About page',
    css: ['about'],
  })
})
app.get('*', (req, res) => {
  console.log(req.originalUrl)
  res.statusCode = 404

  res.render('error', {
    title: 'Error page',
    badLink: req.originalUrl,
    css: ['error', 'modal'],
  })
})

app.listen(3000, () =>
  console.log(`App is live and 🏃 on http://localhost:3000`)
)
