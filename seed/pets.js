const db = require('../db')
const Pet = require('../models/pet')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const pets = [
    {
      name: '',
      description: '',
      image: '',
      breed: '',
      age: '',
      adopted: ''
    }
  ]

  await Pet.insertMany(pets)
}
const run = async () => {
  await main()
  db.close()
}

run()
