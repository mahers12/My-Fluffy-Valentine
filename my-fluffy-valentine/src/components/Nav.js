import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      {/* <h3> My Fluffy Valentine /h3> */}
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/listings">Pets</NavLink>
        <NavLink to="/new">Neighborhood</NavLink>
      </div>
    </nav>
  )
}

export default Nav
