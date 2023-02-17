const router = require('express').Router()
const isAuthenticated = require('./../middlewares/isAuthenticated')
const isAdmin = require('./../middlewares/isAdmin')
const User = require('./../models/User.model')

router.get('/profile', isAuthenticated, (req, res, next) => {
  res.render('profile')
})
router.get('/users', isAdmin, async (req, res, next) => {
  try {
    const allUsers = await User.find()
    res.render('userList', { allUsers })
  } catch (error) {
    next(error)
  }
})

module.exports = router
