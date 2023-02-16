import { useParams, Link } from 'react-router-dom'

const PetDetails = (props) => {
  const { id, index } = useParams()
  const pet = props.pets.filter((animal) => animal._id === id)[0]
  console.log(pet)
  return (
    <div className="grid">
      <div className="img-wrapper">
        <img src={pet.image} alt="PetDetails" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{pet.name}</h3>
      </div>
      <Link to={`/pets/${id}/${index}/adopt`}> Start Adoption Process</Link>
    </div>
  )
}

export default PetDetails
