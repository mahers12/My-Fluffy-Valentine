import React from 'react'
import { Link } from 'react-router-dom'

const Search = (props) => {
  const showPet = (pet) => {}

  return (
    <div className="pet-grid">
      <div>
        {props.pets.map((pet) => (
          <div className="pet-card" onClick={() => showPet(pet)} key={pet.id}>
            <Link to={`${pet.id}`} className="pet-card-info">
              <img style={{ display: 'block' }} src={pet.img} alt={pet.name} />
              <h3>{pet.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/" className="back">
        Back
      </Link>
    </div>
  )
}

export default Search
