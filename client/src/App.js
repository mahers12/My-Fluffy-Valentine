import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Pets from './pages/Pets'
import Neighborhoods from './pages/Neighborhoods'
import PetDetails from './pages/PetDetails'
import NeighborhoodDetails from './pages/NeighborhoodDetails'
import About from './pages/About'
import axios from 'axios'
import AddPet from './components/AddPet'
import AdoptPet from './pages/AdoptPet'
import UpdatePet from './components/UpdatePet'

const App = () => {
  const [neighborhoods, setNeighborhoods] = useState([])
  const [pets, setPets] = useState([])
  const getNeighborhoods = async () => {
    const response = await axios.get(`http://localhost:3001/api/neighborhoods`)
    setNeighborhoods(response.data.neighborhoods)
  }
  const getPets = async () => {
    const response = await axios.get('http://localhost:3001/api/pets')
    console.log(response.data)
    setPets(response.data.pets)
  }

  useEffect(() => {
    getNeighborhoods()
    getPets()
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/neighborhoods"
            element={<Neighborhoods neighborhoods={neighborhoods} />}
          />
          <Route
            path="/neighborhood/:id"
            element={<NeighborhoodDetails neighborhoods={neighborhoods} />}
          />
          <Route
            path="/pets"
            element={<Pets pets={pets} neighborhoods={neighborhoods} />}
          />
          <Route path="/pets/add/:neighborhood" element={<AddPet />} />
          <Route
            path="/pets/:id/:index/adopt"
            element={<AdoptPet pets={pets} setPets={setPets} />}
          />
          <Route path="/pets/:id/:index" element={<PetDetails pets={pets} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
