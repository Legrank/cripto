const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    nft: [{ type: Schema.Types.ObjectId, ref: 'NFT' }],
    name: String,
    bgImg: String,
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)
module.exports = model('Collection', schema)
