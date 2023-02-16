import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const AdoptPet = (props) => {
  let { id, index } = useParams()
  const pet = props.pets.filter((animal) => animal._id === id)[0]
  const [petStatus, setPetStatus] = useState({ name: pet.name })

  const handleChange = (event) => {
    useNavigate()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.delete(
      `http://localhost:3001/api/pets/${id}`,
      petName
    )
    let petsArray = [...props.pets]
    petsArray.splice(index, 1)
    props.setPetStatus(petsArray)
    setPetStatus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="col">
        <label htmlFor="name">Current Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={petName.name}
        />
      </div>

      <button type="submit">Rename Your Pet</button>
    </form>
  )
}
export default UpdatePet
