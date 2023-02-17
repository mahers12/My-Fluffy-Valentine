import { useEffect } from 'react'

const Pet = (props) => {
  console.log(props)
  useEffect(() => {}, [props.pet])
  return (
    <>
      {props.pet && (
        <div className="pet-card">
          <div className="img-wrapper">
            <img src={props.pet.image} alt="Pet" />
          </div>
          <div className="info-wrapper flex-row space">
            <h3>{props.pet.name}</h3>
          </div>
        </div>
      )}
    </>
  )
}

export default Pet
