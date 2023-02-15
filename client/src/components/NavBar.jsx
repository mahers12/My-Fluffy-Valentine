import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/neighborhoods">Neighborhoods</Link>
        <Link to="/pets">Pets</Link>
      </div>
    </nav>
  )
}

export default NavBar
