
const Pet = (props) => {

  const rating = props.rating.toFixed(1)

  return (
    <div className="card pet-card">
      <div className="img-wrapper">
        <img src={props.image} alt="Pet" />
      </div>
      <div className="info-wrapper flex-row space">
        <h3>{props.name}</h3>
        <h1>{rating}</h1>
      </div>
    </div>
  )
}

export default Pet
