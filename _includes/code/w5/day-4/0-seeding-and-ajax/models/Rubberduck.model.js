const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const rubberduckSchema = new Schema(
  {
    name: String,
    picture: String,
    color: String,
    material: {
      type: String,
      enum: ['rubber', 'rock', 'gold', 'diamond'],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Rubberduck = model('Rubberduck', rubberduckSchema)

module.exports = Rubberduck
