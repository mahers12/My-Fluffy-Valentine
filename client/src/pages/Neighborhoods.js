import { Link } from 'react-router-dom'
import Neighborhood from '../components/Neighborhood'
const Neighborhoods = (props) => {
  return (
    <div className="neighborhoods-content">
      <div>
        <h1>Local Denver Neighborhoods</h1>
      </div>
      <section className="details">
        {props.neighborhoods.map((neighborhood) => (
          <Link
            to={`/neighborhoods/${neighborhood._id}`}
            key={neighborhood._id}
          >
            <Neighborhood neighborhood={neighborhood} />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Neighborhoods
