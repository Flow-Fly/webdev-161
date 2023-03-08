const User = require('./../models/User.model')
const jsonWebToken = require('jsonwebtoken')

async function isAuthenticated(req, res, next) {
  let token = req.headers.authorization
  if (!token) {
    return res.status(500).json({ message: 'No Token found.' })
  }
  token = token.replace('Bearer ', '')
  try {
    const payload = jsonWebToken.verify(token, process.env.TOKEN_SECRET)
    const user = await User.findById(payload.id)
    console.log(user)
    req.user = user

    // Everything went well go to the next route
    next()
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Invalid Token.', error })
  }
}

module.exports = isAuthenticated
