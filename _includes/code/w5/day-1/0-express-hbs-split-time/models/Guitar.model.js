const { Schema, model } = require('mongoose')

// const Schema = mongoose.Schema
// const model = mongoose.model

const guitarSchema = new Schema({
  strings: {
    type: Number,
    min: 3,
  },
  picture: {
    type: String,
    default: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1',
  },
  brand: {
    type: String,
    enum: ['Squier', 'Fender', 'Yamaha', 'Gibson'],
  },
  name: String,
})

const Guitar = model('Guitar', guitarSchema)

module.exports = Guitar
