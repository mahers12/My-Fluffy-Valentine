import { useState } from 'react'
import axios from 'axios'

const UpdatePet = ({pets}) => {
  const initialState = { 
    name: '', 
    description: '',
    image: '',
    type: '',
    age: '',
    neighborhood: ''
  }

  const [petState, setPetState] = useState(pets)

  const handleChange = (event) => {
    setPetState({ ...petState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/pets/${pet._id}', petState)
    getPets()
  }

 
  return (
    <form onSubmit={handleSubmit}>
      <div className="col">
      <label htmlFor="add Pet">Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={petState.name}
      />
      </div>
      <div className="col">
<label htmlFor="description">Description</label>
  <textarea
    id="description"
    cols="30"
    rows="0"
    onChange={handleChange}
    value={petState.description}></textarea>

      </div>

      <div className="col">
<label htmlFor="type">Type:</label>
  <input
    type="text"
    id="Type"
    onChange={handleChange}
    value={petState.type}
  />
  </div>
<label htmlFor="age">Age:</label>
  <input
    type="number"
    id="Age"
    onChange={handleChange}
    value={petState.age}
  />Í
<div className="col">
<label htmlFor="neighborhood">Neighborhood:</label>
  <input
    type="text"
    id="Neighborhood"
    onChange={handleChange}
    value={petState.neighborhood}
    />
</div>

      <button type="submit">Update Pet</button>
    </form>
  )
}
export default UpdatePet