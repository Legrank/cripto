const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    imgUrl: {
      type: String,
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
    collectionNft: { type: Schema.Types.ObjectId, ref: 'Collection' },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)
module.exports = model('NFT', schema)
