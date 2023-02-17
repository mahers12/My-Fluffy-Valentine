import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
  return (
    <div className="grid">
      <div className="img-wrapper">
        <img src={pet.image} alt="PetDetails" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{pet.name}</h3>
      </div>
      <Link to={`/pets/${id}/${index}/adopt`}> Start Adoption Process</Link>
      <button onClick={handleDelete}>Pet Adopted</button>
    </div>
  )
}

export default PetDetails
