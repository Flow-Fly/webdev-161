const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jsonWebToken = require('jsonwebtoken')
const isAuthenticated = require('../middlewares/isAuthenticated.js')
const User = require('./../models/User.model.js')

/**
 * We are prefixed by: /api/auth
 */

router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide username and password' })
  }

  try {
    const foundUser = await User.findOne({ username: username })
    if (foundUser) {
      return res.status(400).json({ message: 'This username is already taken' })
    }

    const generatedSalt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, generatedSalt)

    await User.create({
      username,
      password: hashedPassword,
    })
    return res.status(201).json({ message: 'The user was created.' })
  } catch (error) {
    // next(error)
    return res
      .status(500)
      .json({ message: 'Something went wrong during signup', error })
  }
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide username and password' })
  }

  try {
    const foundUser = await User.findOne({ username }).select('password')
    if (!foundUser) {
      return res.status(401).json({ message: 'Wrong credentials' })
    }

    const matchingPasswords = await bcrypt.compare(password, foundUser.password)
    if (!matchingPasswords) {
      return res.status(401).json({ message: 'Wrong credentials' })
    }

    const token = jsonWebToken.sign(
      { id: foundUser._id },
      process.env.TOKEN_SECRET,
      {
        algorithm: 'HS256',
        expiresIn: '1d',
      }
    )
    return res.status(200).json({ token, message: 'Token created.' })
  } catch (error) {
    next(error)
  }
})

router.get('/me', isAuthenticated, async (req, res, next) => {
  res.json(req.user)
})

module.exports = router
