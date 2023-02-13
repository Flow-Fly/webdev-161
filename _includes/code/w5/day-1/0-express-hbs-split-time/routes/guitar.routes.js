const router = require('express').Router()
const Guitar = require('../models/Guitar.model')
const { isValidObjectId } = require('mongoose')

/**
 * The route is prefixed with /guitars
 */

router.get('/', async (req, res, next) => {
  try {
    const allGuitars = await Guitar.find()
    res.render('guitars', { allGuitars })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  console.log('first route')
  if (isValidObjectId(req.params.id)) {
    try {
      const oneGuitar = await Guitar.findById(req.params.id)
      res.render('one-guitar', { oneGuitar })
    } catch (error) {
      next(error)
    }
  } else {
    console.log('Rejected', req.params.id)
    next()
  }
})
router.get('/create', (req, res, next) => {
  res.render('create-guitar')
})

router.post('/create', async (req, res, next) => {
  // const allValues = Object.values(req.body)
  // console.log(allValues)
  if (req.body.picture === '') {
    delete req.body.picture
  }

  try {
    const newlyCreatedGuitar = await Guitar.create(req.body)
    console.log(newlyCreatedGuitar)

    // res.send('Guitar created!')
    res.redirect('/guitars')
  } catch (error) {
    next(error)
  }
})

router.get('/search', async (req, res, next) => {
  try {
    const allGuitars = await Guitar.find({ brand: req.query.brand })

    res.render('guitars', { allGuitars })
  } catch (error) {
    next(error)
  }
})

router.get('/:id/delete', async (req, res, next) => {
  if (isValidObjectId(req.params.id)) {
    try {
      await Guitar.findByIdAndDelete(req.params.id)
      res.redirect('/guitars')
    } catch (error) {
      next(error)
    }
  } else {
    res.send('Wrong id')
  }
})

module.exports = router
