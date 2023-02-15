const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pet = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    age: { type: Number, required: true },
    neighborhood: {
      type: Schema.Types.ObjectId,
      ref: 'Neighborhood',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pet', Pet)
