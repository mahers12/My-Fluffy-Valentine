import { useParams } from 'react-router-dom'

const NeighborhoodDetails = (props) => {
  const { id } = useParams()
  const neighborhood = props.neighborhood.filter((word) => word._id === id)
  console.log(neighborhood)
  return (
    <div className="grid">
      <div className="img-wrapper">
        <img src={neighborhood[0].image} alt="NeighborhoodDetails" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{neighborhood[0].name}</h3>
      </div>
    </div>
  )
}

export default NeighborhoodDetails
