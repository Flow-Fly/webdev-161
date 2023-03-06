const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const jokeSchema = new Schema(
  {
    joke: {
      type: String,
      minLength: 10,
      maxLength: 500,
    },
    category: {
      type: String,
      enum: ['Pun', 'Dark', 'Programming'],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Joke = model('Joke', jokeSchema)

module.exports = Joke
