import { useParams } from 'react-router-dom'

const PetDetails = (props) => {
  const { id } = useParams()
  const pet = props.pets.filter((animal) => animal._id === id)
  console.log(pet)
  return (
    <div className="grid">
      <div className="img-wrapper">
        <img src={pet[0].image} alt="PetDetails" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{pet[0].name}</h3>
      </div>
    </div>
  )
}

export default PetDetails
