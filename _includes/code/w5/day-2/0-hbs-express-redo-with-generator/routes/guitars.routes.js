const router = require('express').Router()
const Guitar = require('../models/Guitar.model')
const Shop = require('../models/Shop.model')

/**
 * All the routes are prefixed with /guitars
 */

router.get('/', async (req, res, next) => {
  try {
    const allGuitars = await Guitar.find().populate('shop')
    console.log(allGuitars)
    res.render('guitar/list', { guitars: allGuitars })
  } catch (error) {
    next(error)
  }
})

router.get('/create', async (req, res, next) => {
  try {
    const allShops = await Shop.find()
    res.render('guitar/create-guitar', { shops: allShops })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  console.log(req.body)
  const guitar = {
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    shop: req.body.store,
  }
  try {
    const createdGuitar = await Guitar.create(guitar)
    console.log(createdGuitar)
    res.redirect('/guitars')
  } catch (error) {
    next(error)
  }
})

router.get('/:id/edit', async (req, res, next) => {
  try {
    const shops = await Shop.find()
    const guitarToUpdate = await Guitar.findById(req.params.id)
    res.render('guitar/update-guitar', { shops, guitar: guitarToUpdate })
  } catch (error) {
    next(error)
  }
})

router.post('/:id/edit', async (req, res, next) => {
  console.log(req.body)
  try {
    const updatedGuitar = await Guitar.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    console.log(updatedGuitar)
    res.redirect('/guitars')
  } catch (error) {
    next(error)
  }
})

module.exports = router
