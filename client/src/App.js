import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import ViewPet from './pages/ViewPet'
import Neighborhoods from './pages/Neighborhoods'

const App = () => {
  const [pets, setPets] = useState()
  const [newPet, setNewPet] = useState({
    name: '',
    description: '',
    image: '',
    type: '',
    age: '',
    neighborhood: ''
  })

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
