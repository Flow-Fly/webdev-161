const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the Shop model to whatever makes sense in this case
const guitarSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: String,
    shop: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      // required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Guitar = model('Guitar', guitarSchema)

module.exports = Guitar
