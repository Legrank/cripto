const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    collection: { type: Schema.Types.ObjectId, ref: 'Collection' },
  },
  { timestamps: true }
)
module.exports = model('NFT', schema)
