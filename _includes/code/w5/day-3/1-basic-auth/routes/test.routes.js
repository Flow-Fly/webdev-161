const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  req.dogs = ['Izmir', 'Pacco', 'Maddison']
  next()
})

router.use((req, res, next) => {
  if (Math.random() > 0.5) {
    req.cats = 'Miaou'
  }
  req.dogs.push('Lucky', 'Niko')
  next()
})

router.get('/stuff', (req, res, next) => {
  console.log(req.dogs, req.cats)
  res.send('ok')
})

router.use((req, res, next) => {
  req.dogs = []
  next()
})
module.exports = router
