/**
 * Require express function
 */
const express = require('express')
/**
 * Require hbs
 */
const hbs = require('hbs')

/**
 * Create the app object
 */
const app = express()

/**
 * Setup time!
 */
// We need to define where the static files are
app.use(express.static(`${__dirname}/public`))
// Register hbs partials
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)

/**
 * ROUTES
 */

app.get('/', (request, response) => {
  response.render('home', {
    navbar: true,
  })
})

app.get('/about', (req, res) => {
  console.log(req.query)
  res.render('about', { navbar: true })
})

app.get('*', (req, res) => {
  res.render('error')
})

/**
 * Listen to a specific PORT
 */
app.listen(3000, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log(`http://localhost:3000`)
})
