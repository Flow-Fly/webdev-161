const mongoose = require('mongoose')
const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/0-seeding-and-ajax'

const Duck = require('./../models/Rubberduck.model')

const ducks = [
  {
    name: 'Bob',
    picture:
      'https://amsterdamduckstore.com/wp-content/uploads/2019/08/Love-you-rubber-duck-front-Amsterdam-Duck-Store.jpg',
    color: 'yellow',
    material: 'rock',
  },
  {
    name: 'Alice',
    picture:
      'https://amsterdamduckstore.com/wp-content/uploads/2018/03/Tennis-Rubber-Duck-front-Amsterdam-Duck-Store-400x400.jpg',
    color: 'red',
    material: 'diamond',
  },
  {
    name: 'Pizza',
    picture:
      'https://amsterdamduckstore.com/wp-content/uploads/2021/09/I-love-Pizza-duck-front-480x480.jpg',
    color: 'green',
    material: 'rubber',
  },
  {
    name: 'Farmer',
    picture:
      'https://amsterdamduckstore.com/wp-content/uploads/2015/07/Holland-Rubber-Duck-fornt-e1569831774621.jpg',
    color: 'blue',
    material: 'gold',
  },
]

mongoose
  .connect(MONGO_URI)
  .then(async (x) => {
    try {
      const dbName = x.connections[0].name
      console.log(`Connected to Mongo! Database name: "${dbName}"`)
      await Duck.deleteMany()
      await Duck.create(ducks)
      await mongoose.disconnect()
      console.log('Disconnected after creating ducks')
    } catch (error) {
      console.error(error)
    }
  })
  .catch((err) => {
    console.error('Error connecting to mongo: ', err)
  })
