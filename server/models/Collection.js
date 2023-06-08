const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    nft: [{ type: Schema.Types.ObjectId, ref: 'NFT' }],
    name: String,
    bgImg: String,
  },
  { timestamps: true }
)
module.exports = model('Collection', schema)
