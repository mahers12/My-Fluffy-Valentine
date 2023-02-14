import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Pet from './components/Pet'
import Neighborhood from './components/Neigborhood'
import petArray from './data/pets'
import Home from './components/Home'
import Nav from './components/Nav'
import Search from './components/search'

const App = () => {
  const [pets, setPets] = useState(petsArray)
  const [newPet, setNewPet] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    breed: '',
    age: '',
    adopted: ''
  })
}

return (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search pets={pets} />} />
        <Route path="/search/:id" element={<PetDetails pets={pets} />} />
      </Routes>
    </main>
  </div>
)

export default App
