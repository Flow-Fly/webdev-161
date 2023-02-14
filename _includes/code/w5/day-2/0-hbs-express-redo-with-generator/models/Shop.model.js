const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the Shop model to whatever makes sense in this case
const shopSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      street: String,
      number: Number,
      city: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Shop = model('Shop', shopSchema)

module.exports = Shop
