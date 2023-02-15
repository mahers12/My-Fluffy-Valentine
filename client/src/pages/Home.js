import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pet from '../components/Pet'
import Neighborhood from '../components/Neighborhood'
const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {
  const [neighborhood, setNeighborhood] = useState([])

  useEffect(() => {
    const getNeighborhood = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/neighborhood?key=${API_KEY}`
      )
      setNeighborhood(response.data.results)
    }
    getNeighborhood()
  }, [])

  // const getSearchResults = async (event) => {
  //   event.preventDefault()
  //   const response = await axios.get(
  //     `https://api.rawg.io/api/games?search=${searchQuery}&key=${API_KEY}`
  //   )
  //   setSearchResults(response.data.results)
  //   setSearchQuery('')
  //   toggleSearched(true)
  // }

  // const handleChange = (event) => {
  //   setSearchQuery(event.target.value)
  // }

  return (
    <div className="neighborhood">
      <h1>neighborhood</h1>
      <section className="container-grid">
        {neighborhood.map((neighborhood) => (
          <Link to={`/view/games/${neighborhood.id}`} key={neighborhood.id}>
            <neighborhoodCard
              name={neighborhood.name}
              image={neighborhood.image_background}
              {...neighborhood}
            />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home
