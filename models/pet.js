const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pet = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    adopted: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pet', Pet)
