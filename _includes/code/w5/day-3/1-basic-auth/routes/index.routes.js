const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.use('/', require('./auth.routes'))
router.use('/', require('./user.routes'))
router.use('/', log, require('./test.routes'))

function log(req, res, next) {
  console.log('Entering test routes!')
  next()
}

module.exports = router
