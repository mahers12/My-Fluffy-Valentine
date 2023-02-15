
const Neighborhood = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="Neighborhood" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default Neighborhood



