import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/neighborhoods">Neighborhoods</Link>
          </li>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
