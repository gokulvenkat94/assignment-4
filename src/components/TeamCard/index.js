import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, imageUrl, result, status} = details

  return (
    <li className="backk">
      <Link to={`/blogs/${id}`}>
        <div className="back">
          <div className="flex">
            <img src={imageUrl} alt={name} className="size" />
            <p>{name}</p>
            <p>{result}</p>
            <p>{status}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
