const mongoose = require('mongoose')

let MONGODB_URI =
  'mongodb+srv://sarahmaher:O5IqQarGWrh5SJuF@mahers.6wl4ltj.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
