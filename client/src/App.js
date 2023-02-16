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
import AdoptPet from './components/AdoptPet'
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

  const UpdatePet = async () => {
    const response = await axios.update('http://localhost:3001/api/pets')
    console.log(response.data)
    UpdatePet(response.data.pets)
  }

  useEffect(() => {
    getNeighborhoods()
    getPets()
    UpdatePet()
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
          <Route path="/pets" element={<Pets pets={pets} />} />
          <Route path="/pets/add/:neighborhood" element={<AddPet />} />
          <Route path="/pets/adopt/:neighborhood" element={<AdoptPet />} />
          <Route path="/pets/adopt/:neighborhood" element={<UpdatePet />} />
          <Route path="/pets/:id" element={<PetDetails pets={pets} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
