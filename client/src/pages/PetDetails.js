import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const PetDetails = (props) => {
  const { id, index } = useParams()
  const pet = props.pets.filter((animal) => animal._id === id)[0]
  console.log(pet)
  const navigate = useNavigate()

  const handleDelete = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`http://localhost:3001/api/pets/${id}`)
    navigate('/')
  }
  useEffect(() => {}, [pet])
  return (
    <>
      {pet && (
        <div className="pet-details">
          <div className="img-wrapper">
            <img src={pet.image} alt="PetDetails" />
          </div>
          <div className="fluff">
            <h3> Name: {pet.name}</h3>
            <p>Description: {pet.description}</p>
            <p>Age: {pet.age}</p>
            <p>Type: {pet.type}</p>
            <p>Neighborhood: {pet.neighborhood.name}</p>
          </div>
          <Link to={`/pets/${id}/${index}/adopt`}> Start Adoption Process</Link>
          <button onClick={handleDelete}>Pet Adopted</button>
        </div>
      )}
    </>
  )
}

export default PetDetails
