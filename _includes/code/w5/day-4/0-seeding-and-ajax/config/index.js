// We reuse this import in order to have access to the `body` property in requests
const express = require('express')
const path = require('path')

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require('morgan')

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require('cookie-parser')

// ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests

// Middleware configuration
module.exports = (app) => {
  app.set('view engine', 'hbs')
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // In development environment the app logs
  app.use(logger('dev'))

  // To have access to `body` property in the request
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
}
