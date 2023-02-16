import { useState } from 'react'
import axios from 'axios'

const AdoptPet = (props) => {
//   const initialState = { 
//     name: '', 
//     description: '',
//     image: '',
//     type: '',
//     age: '',
//     neighborhood: ''
//   }

//   const [petState, setPetState] = useState(initialState)
  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.delete('http://localhost:3001/api/pet')
    // console.log(petState)
    // setPetState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="col">
      <label htmlFor="adopt pet">Adopt Pet:</label>
      <input
        id="name"
        type="text"
        // value={petState.name}
      />
      </div>
      <button type="submit">Adopt Pet</button>

    </form>
  )
}
export default AdoptPet