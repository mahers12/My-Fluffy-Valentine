import AdoptPet from '../components/AdoptPet'

const AdoptPet = (props) => {
  return (
    <div>
      <h1>Would You Like to Rename Your Pet</h1>
      <AdoptPet pets={props.pets} setPets={props.setPets} />
    </div>
  )
}
export default AdoptPet
