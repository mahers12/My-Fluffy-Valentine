import { Link } from 'react-router-dom'
import Pet from '../components/Pet'

const Pets = (props) => {
  return (
    <div className="pets-content">
      <div>
        <h1>Pets Available for Adoption</h1>
      </div>
      <section className="details">
        {props.pets.map((pet) => (
          <Link to={`/pets/${pet._id}`} key={pet._id}>
            <Pet pet={pet} />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Pets
