const mongoose = require('mongoose')

mongoose
  .set('strictQuery', true)
  .connect('mongodb://localhost/the-redo')
  .then((db) => console.log(`Connected to ${db.connection.name}`))
  .catch((e) => console.log(e))
