import UpdatePet from '../components/UpdatePet'

const AdoptPet = (props) => {
  return (
    <div>
      <h1>Would You Like to Rename Your Pet</h1>
      <UpdatePet pets={props.pets} setPets={props.setPets} />
    </div>
  )
}
export default AdoptPet
