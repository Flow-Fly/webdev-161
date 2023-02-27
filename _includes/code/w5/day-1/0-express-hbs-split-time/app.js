// .env variables arew not accessible before requestion the dotenv package.
console.log('Before', process.env.A_VARIABLE)
require('dotenv').config({ path: './config/.env' })
console.log('After', process.env.A_VARIABLE)

const express = require('express')
const hbs = require('hbs')
const app = express()
const path = require('path')

// requiring the dbConfig file ejust allow us to execute it.
require('./config/dbConfig')

// Creating a fallback value in case the PORT was not specified in the .env
const PORT = process.env.PORT || 5050

/**
 * Those two middleware are here to read the informations
 * which are sent via POST requests.
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))

/**
 * All of the routes are going to be handled inside of this index.routes
 */
app.use('/', require('./routes/index.routes'))

app.listen(PORT, () => console.log(`Connected to http://localhost:${PORT}`))
