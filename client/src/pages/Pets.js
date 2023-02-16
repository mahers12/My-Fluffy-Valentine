import { Link } from 'react-router-dom'
import Pet from '../components/Pet'
import AddPet from '../components/AddPet'

const Pets = (props) => {
  return (
    <div className="pets-content">
      <div>
        <h1>Pets Available for Adoption</h1>
      </div>
      <AddPet neighborhoods={props.neighborhoods} />
      <section className="details">
        {props.pets.map((pet, index) => (
          <Link to={`/pets/${pet._id}/${index}`} key={pet._id}>
            <Pet pet={pet} />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Pets
