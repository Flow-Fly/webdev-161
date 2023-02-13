// const express = require('express')
// const router = express.Router
const router = require('express').Router()

router.use('/guitars', require('./guitar.routes'))

module.exports = router
