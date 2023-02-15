import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Pets from './pages/Pets'
import Neighborhoods from './pages/Neighborhoods'
import About from './pages/About'
import axios from 'axios'
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
          <Route path="/pets" element={<Pets pets={pets} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
