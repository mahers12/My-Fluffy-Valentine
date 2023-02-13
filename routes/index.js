const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/pet', controllers.createPet)
router.get('/pets', controllers.getAllPets)
router.get('/pets/:id', controllers.getPetById)
router.put('/pets/:id', controllers.updatePet)
router.delete('/pets/:id', controllers.deletePet)
router.get('/neighborhoods', controllers.getAllNeighborhoods)
router.post('/neighborhood', controllers.createNeighborhood)

module.exports = router
