const express = require('express')
const hbs = require('hbs')
const app = express()
const path = require('path')

require('./config/dbConfig')
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

app.use('/', require('./routes/index.routes'))

app.listen(3000, () => console.log('Connected to http://localhost:3000'))
