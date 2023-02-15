import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Pet from '../components/Pet'
const API_KEY = process.env.REACT_APP_API_KEY

const ViewPet = () => {
  const [pets, setPets] = useState([])

  let { neighborhoodId } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getPetByNeiborhood = async () => {
      const response = await axios
        .get
        // `https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${API_KEY}`
        ()
      if (!isCancelled) {
        setPets(response.data.results)
      }
    }
   getPetByNeiborhood()
    return () => {
      isCancelled = true
    }
  }, [neighborhoodId])

  return (
    <div className="container-grid">
      {pets.map((pet) => (
        // <Link to={`/games/details/${game.id}`} key={game.id}>
        //   <GameCard {...game} image={game.background_image} />
    //     </Link>
    //   ))}
    // </div>
  )
}

export default ViewPet
