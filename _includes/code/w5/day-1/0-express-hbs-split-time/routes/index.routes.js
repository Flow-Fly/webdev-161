// const express = require('express')
// const router = express.Router
const router = require('express').Router()

/**
 * In this small app, we just have a route for guitars,
 * If we created some store aswell, we would need a route for /store,
 * Basically we need a route (And a model) for everything that we can create on our website.
 */

router.use('/guitars', require('./guitar.routes'))

module.exports = router
