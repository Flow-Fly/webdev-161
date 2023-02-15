const express = require('express')
const User = require('../models/User.model')
const router = express.Router()
const bcrypt = require('bcryptjs')

/**
 *
 * Press the sign-up / register button/link
 * Congratulation a wild form appear
 * Have the user put their username and password and send the form
 *  => Send a post request to a specific endpoint
 * First check: do we have all of the infos, if not we want to provide the user
 * with some feedback.
 * Does someone with the same username exist?
 * If we don't find anyone, let's create the user in our database,
 * but before that, just make sure to hash their password!
 *
 * We redirect to sign-in page!
 * We display a form
 * The user has to send the completed form
 * First check: do we have all of the infos, if not we want to provide the user
 * with some feedback.
 * Does this user exist?
 * If the user exist, compare the password
 * if the password is the same, that's a full greenlight
 *
 *
 */

router.get('/signup', async (req, res, next) => {
  res.render('auth/signup')
})
router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body
  console.log({ username, password })
  try {
    if (!username || !password) {
      return res.render('auth/signup', {
        errorMessage: 'Please fill out all of the fields!',
      })
    }
    if (password.length < 6) {
      return res.render('auth/signup', {
        errorMessage: 'Please put a longer password',
      })
    }
    const foundUser = await User.findOne({ username: username })
    if (foundUser) {
      return res.render('auth/signup', {
        errorMessage: 'Theres another one of you!',
      })
    }

    // treefellautumnred10
    // fh4587twew*

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const userToCreate = {
      username,
      password: hashedPassword,
    }
    const userFromDb = await User.create(userToCreate)
    console.log(userFromDb)
    res.redirect('/login')
  } catch (error) {
    next(error)
  }
})

router.get('/login', async (req, res, next) => {
  res.render('auth/login')
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  try {
    if (!username || !password) {
      return res.render('auth/login', {
        errorMessage: 'Please fill out all of the fields!',
      })
    }

    const foundUser = await User.findOne(
      { username },
      { password: 1, username: 1 }
    )
    if (!foundUser) {
      return res.render('auth/login', {
        errorMessage: 'Please sign up first!',
      })
    }

    const matchingPass = await bcrypt.compare(password, foundUser.password)
    if (!matchingPass) {
      return res.render('auth/login', {
        errorMessage: 'Invalid credentials!',
      })
    }
    // ! We are safe to login the user!

    req.session.currentUser = foundUser
    // const userObject = foundUser.toObject()
    // delete userObject.password
    // req.session.currentUser = userObject
    res.redirect('/profile')
  } catch (error) {
    next(error)
  }
})

router.get('/logout', (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      return next(error)
    }
    res.redirect('/login')
  })
})

module.exports = router
