import {Link} from 'react-router-dom'
import './index.css'

const FinalGames = props => {
  const {eachItem, isActive} = props
  const {id, thumbnail, title, view} = eachItem

  const a = isActive && 'w'

  return (
    <Link to={`/games/${id}`} className="gameData2">
      <li className="gameList">
        <img src={thumbnail} alt={`thumb${id}`} className="thumbGame" />
        <p className={a}>{title}</p>
        <div className="gameView">
          <p className={a}>{view}</p>
          <p className={`viewpad  ${a}`}>views </p>
        </div>
      </li>
    </Link>
  )
}

export default FinalGames
