import { useState } from 'react'
import axios from 'axios'

const AddPet = (props) => {
  const initialState = { 
    name: '', 
    description: '',
    image: '',
    type: '',
    age: '',
    neighborhood: ''
  }

  const [petState, setPetState] = useState(initialState)

  const handleChange = (event) => {
    setPetState({ ...petState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/pet', petState)
    // console.log(petState)
    setPetState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add Pet">addPet:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={petState.name}
      />
<label htmlFor="description">Description</label>
  <textarea
    id="description"
    cols="30"
    rows="10"
    onChange={handleChange}
    value={petState.description}></textarea>

<label htmlFor="type">Type:</label>
  <input
    type="text"
    id="Type"
    onChange={handleChange}
    value={petState.type}
  />
<label htmlFor="age">Age:</label>
  <input
    type="number"
    id="Age"
    onChange={handleChange}
    value={petState.age}
  />

<label htmlFor="neighborhood">Neighborhood:</label>
  <input
    type="text"
    id="Neighborhood"
    onChange={handleChange}
    value={petState.neighborhood}
  />


      <button type="submit">Pet Added</button>



    </form>
  )
}

export default AddPet