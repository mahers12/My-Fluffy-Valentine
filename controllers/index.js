const Pet = require('../models/pet')
const Neighborhood = require('../models/neighborhood')
const createPet = async (req, res) => {
  try {
    const pet = await new Pet(req.body)
    await pet.save()
    const neighborhood = await Neighborhood.findById(pet.neighborhood)
    neighborhood.pets.push(pet._id)
    await neighborhood.save()
    return res.status(201).json({
      pet
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find()
    return res.status(200).json({ pets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPetById = async (req, res) => {
  try {
    const { id } = req.params
    const pet = await Pet.findById(id)
    if (pet) {
      return res.status(200).json({ pet })
    }
    return res.status(404).send('Pet with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(pet)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePet = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Pet.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Pet deleted')
    }
    throw new Error('Pet not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllNeighborhoods = async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find()
    return res.status(200).json({ neighborhoods })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNeighborhood = async (req, res) => {
  try {
    const neighborhood = await new Neighborhood(req.body)
    await neighborhood.save()
    return res.status(201).json({
      neighborhood
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet,
  getAllNeighborhoods,
  createNeighborhood
}
