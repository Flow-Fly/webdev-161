/**
 * Get access to express
 */

const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs')

// app.use(log, log, log, log)
app.use((req, res, next) => {
  const url = req.originalUrl
  if (url === '/') {
    res.locals.title = 'Homepage'
  } else if (url.includes('about')) {
    res.locals.title = 'About'
  } else {
    res.locals.title = 'Characters'
  }

  next()
})

const first = (req, res, next) => {
  console.log('first')
  next()
}
const second = (req, res, next) => {
  console.log('second')
  next()
}
const third = (req, res, next) => {
  console.log('third')
  next()
}

// console.log('hey')
app.get('/', first, second, third, (req, res, next) => {
  console.log('Hello from /')
  res.render('home')

  // res.render('home', {
  //   title: 'Homepage',
  // })
})
app.get('/characters', async (req, res, next) => {
  try {
    // throw Error('Oh no !')
    const raw = await fetch('https://rickandmortyapi.com/api/character')
    const finalResponse = await raw.json()
    console.log(finalResponse)

    res.render('characters', {
      characters: finalResponse.results,
    })
  } catch (error) {
    next(error)
  }
})

// app.use((req, res, next) => {
//   console.log('Thirsd stop')
//   next()
// })

app.get('/about', (req, res) => {
  res.render('about')
})

/**
 * Error handling middleware
 */

app.use((error, req, res, next) => {
  res.statusCode = 500
  console.log(error.message)
  res.render('server-error', { code: res.statusCode, message: error.message })
})

function log(req, res, next) {
  console.log('Logging')
  next()
}
app.listen(3000, () => console.log(`Running on http://localhost:3000`))
