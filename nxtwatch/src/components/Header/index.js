import {withRouter, Link} from 'react-router-dom'

import {BsMoon, BsSun} from 'react-icons/bs'
import {VscAccount} from 'react-icons/vsc'

import './index.css'

const Header = ({isActive, changeColor}) => {
  const onActive1 = () => {
    changeColor()
  }

  const a = isActive ? 'headerContainer1' : 'headContainer1'

  return (
    <div className={a}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="l-logo"
        className="head1"
      />
      <div className="headLeftContainer">
        {isActive ? (
          <BsSun className="space space2 sun" onClick={onActive1} />
        ) : (
          <BsMoon className="space space2 " onClick={onActive1} />
        )}
        <VscAccount className="space face" />
        <Link to="/login">
          <button type="button" className="space space1 submit">
            Logout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Header)
