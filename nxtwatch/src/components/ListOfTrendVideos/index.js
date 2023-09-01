import {Link} from 'react-router-dom'

import './index.css'

const ListOfTrendVideos = props => {
  const {eachItem, isActive} = props
  const {id, published, thumbnail, title, view, name} = eachItem

  const a = isActive ? 'view2' : 'view1'

  return (
    <Link to={`/trend/${id}`} className="trendList">
      <div className="videosTrens">
        <img src={thumbnail} alt={`thumnail${id}`} className="thumbCard1" />
        <div className="thumbNailCard">
          <p className={a}>{title}</p>
          <p className={a}>{name}</p>
          <div className="bottomNail">
            <p className={a}>{view}</p>
            <p className={`viewCard ${a}`}>Views</p>
            <p className={a}>{published}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ListOfTrendVideos
