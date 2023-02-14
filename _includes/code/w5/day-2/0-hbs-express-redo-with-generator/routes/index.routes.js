const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  try {
    // throw Error('Oh no!')
    res.render('index')
  } catch (error) {
    next(error)
  }
})

router.use('/shops', require('./shops.routes'))
router.use('/guitars', require('./guitars.routes'))

module.exports = router
