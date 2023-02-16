const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.render('index')
})

router.use('/', require('./rubberduck.routes'))

module.exports = router
