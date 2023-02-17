import { useParams } from 'react-router-dom'

const NeighborhoodDetails = (props) => {
  const { id } = useParams()
  const neighborhood = props.neighborhoods.filter((word) => word._id === id)
  console.log(neighborhood)
  return (
    <div className="neighborhooddetails">
      <div className="img-wrapper">
        <img src={neighborhood[0].picture} alt="NeighborhoodDetails" />
      </div>
      <div className="info-wrapper">
        <h3>{neighborhood[0].name}</h3>
      </div>
    </div>
  )
}

export default NeighborhoodDetails
