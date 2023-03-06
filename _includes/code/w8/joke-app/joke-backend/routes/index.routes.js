const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.use('/jokes', require('./jokes.routes'))

module.exports = router
