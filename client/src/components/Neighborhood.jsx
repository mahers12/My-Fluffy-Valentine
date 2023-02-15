
const Neighborhood = (props) => {
  return (
    <div className="card" >
      <div className="img-wrapper">
        <img src={props.neighborhood.picture} alt="Neighborhood" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{props.neighborhood.name}</h3>
      </div>
    </div>
  )
}

export default Neighborhood



