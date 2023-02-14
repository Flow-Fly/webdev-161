const express = require('express')
const router = express.Router()
const Shop = require('./../models/Shop.model')
const Guitar = require('./../models/Guitar.model')
/**
 * All of my routes are prefixed with /shops
 */

router.get('/', async (req, res, next) => {
  try {
    const allShops = await Shop.find()
    res.render('shop/list', { shops: allShops })
  } catch (error) {
    next(error)
  }
})
router.get('/create', async (req, res, next) => {
  res.render('shop/create-shop')
})

router.post('/', async (req, res, next) => {
  // console.log(req.body)
  const { name } = req.body
  if (name === '') {
    return res.render('shop/create-shop', {
      errorMessage: 'You need a name in order to create a shop',
    })
  }

  const shop = {
    name: req.body.name,
    address: {
      street: req.body.street,
      city: req.body.city,
      number: req.body.streetNumber,
    },
  }
  // res.send(req.body)

  try {
    const createdShop = await Shop.create(shop)
    console.log(createdShop)
    res.redirect('/shops')
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const shop = await Shop.findById(req.params.id)
    const relatedGuitars = await Guitar.find({ shop: req.params.id })
    res.render('shop/one-shop', { shop, relatedGuitars })

    // res.send({ shop, relatedGuitars })
  } catch (error) {
    next(error)
  }
})

router.get('/:id/delete', async (req, res, next) => {
  try {
    await Shop.findByIdAndDelete(req.params.id)
    const allGuitars = await Guitar.find({ shop: req.params.id })
    for (const guitar of allGuitars) {
      guitar.shop = null
      await guitar.save()
    }
    res.redirect('/shops')
  } catch (error) {
    next(error)
  }
})

module.exports = router
