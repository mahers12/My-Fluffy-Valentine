import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
      <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Neigborhood">Neigborhood</Link>
        <Link to="/Pet">Pet</Link>
      </div>
    </nav>
  )
}

export default NavBar
