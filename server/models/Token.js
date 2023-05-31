const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    refreshToken: { required: true, type: String },
  },
  { timestamps: true }
)
module.exports = model('Token', schema)
