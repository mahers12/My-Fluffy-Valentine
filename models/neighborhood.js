const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Neighborhood = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    shelter: {
      type: String,
      required: true
    },
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Neighborhood', Neighborhood)
