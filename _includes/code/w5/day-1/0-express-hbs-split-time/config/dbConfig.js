const mongoose = require('mongoose')

const CONNECTION_URL =
  process.env.MONGO_URI || 'mongodb://127.0.0.1/my-database'

mongoose
  .set('strictQuery', true)
  .connect(CONNECTION_URL)
  .then((db) => console.log(`Connected to ${db.connection.name}`))
  .catch((e) => console.log(e))
