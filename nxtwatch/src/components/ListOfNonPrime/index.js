import {Link} from 'react-router-dom'

import './index.css'

const ListOfNonPrime = props => {
  const {eachItem} = props
  const {id, published, thumNailUrl, title, view, name, profile} = eachItem

  return (
    <Link to={`/all/${id}`} className="listNonPrime">
      <li className="list">
        <img src={thumNailUrl} alt={`thumbNail${id}`} className="thumb" />
        <div className="theory">
          <img src={profile} alt="profile" className="profie" />
          <div className="profileContainer1">
            <p className="title">{title}</p>

            <p>{name}</p>
            <div className="rating">
              <div className="cardView">
                <p>{view}</p>
                <p>View</p>
              </div>
              <p className="v">/</p>
              <p className="publish">{published}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default ListOfNonPrime
