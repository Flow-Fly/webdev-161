const router = require('express').Router()
const Guitar = require('../models/Guitar.model')
const { isValidObjectId } = require('mongoose')

/**
 * The route is prefixed with /guitars
 */

/**
 * Find all guitars
 */
router.get('/', async (req, res, next) => {
  try {
    const allGuitars = await Guitar.find()
    res.render('guitars', { allGuitars })
  } catch (error) {
    next(error)
  }
})

/**
 * Find one guitar by it's id.
 */
router.get('/:id', async (req, res, next) => {
  console.log('first route')
  // Validating the params.id or going to the next() route
  if (isValidObjectId(req.params.id)) {
    try {
      // Find by id and render that guitar
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

/**
 * Display a simple form to allow us to create a guitar
 */
router.get('/create', (req, res, next) => {
  res.render('create-guitar')
})

/**
 * Receive a POST request (Sent from the previous form)
 */
router.post('/create', async (req, res, next) => {
  // const allValues = Object.values(req.body)
  // console.log(allValues)
  if (req.body.picture === '') {
    // If there is no picture, just remove the key
    delete req.body.picture
  }

  try {
    // Create the guitar
    const newlyCreatedGuitar = await Guitar.create(req.body)
    console.log(newlyCreatedGuitar)

    // res.send('Guitar created!')
    // Redirect the user to the /guitars page
    res.redirect('/guitars')
  } catch (error) {
    next(error)
  }
})
/**
 * ! This route receive a query string
 * * http://airbnb.com/search?location=Gran-Canaria&start-day=06-18-2023&price-range=500&price-range=900
 * Here for instance:
 *  - location: Gran-Canaria
 *  - startDay: 06-18-2023
 *  - priceRange: [500, 900]
 *
 * on our case, there is just one query: brand
 */
router.get('/search', async (req, res, next) => {
  try {
    // Find the guitars and filter them by brand
    const allGuitars = await Guitar.find({ brand: req.query.brand })

    res.render('guitars', { allGuitars })
  } catch (error) {
    next(error)
  }
})

// Delete a guitar!
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
