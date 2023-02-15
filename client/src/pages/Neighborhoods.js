import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY

const Neighborhoods = () => {
  const [neighborhoods, setNeighborhoods] = useState({})

  let { neighborhoodId } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getNeighborhoods = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/neighborhoods/${neighborhoodId}?key=${API_KEY}`
      )
      if (!isCancelled) {
        setNeighborhoods(response.data)
      }
    }
    getNeighborhoods()
    return () => {
      isCancelled = true
    }
  }, [neighborhoodId])

  return (
    <div className="neighborhoods-content">
      <div>
        <h1>{neighborhoods.name}</h1>
      </div>
      <section className="image-container">
        <a href={neighborhoods.website}>
          <img src={neighborhoods.background_image} alt="Background" />
        </a>
      </section>
      <section className="details">
        <div className="flex-row neighborhood-details">
          <div className="detail">
            <h3>somethingabout: {neighborhoods.somethingabout}</h3>
          </div>
        </div>
        <div className="flex-col">
          <h3>Description</h3>
          <p>{neighborhoods.description_raw}</p>
        </div>
      </section>
    </div>
  )
}

export default Neighborhoods
