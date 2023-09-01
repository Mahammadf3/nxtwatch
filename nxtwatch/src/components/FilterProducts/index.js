import {Component} from 'react'
import {BsHouseDoor, BsLightning} from 'react-icons/bs'
import {BiHeart, BiFileBlank} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import './index.css'

class FilterProducts extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="navContainer">
          <Link to="/" className="homeLink">
            <div className="homeIcon">
              <p>
                <BsHouseDoor />
              </p>

              <p className="homeIcon1">Home</p>
            </div>
          </Link>
          <Link to="/trend" className="homeLink">
            <div className="homeIcon">
              <p>
                <BsLightning />
              </p>

              <p className="homeIcon1">Trending</p>
            </div>
          </Link>
          <Link to="/game" className="homeLink">
            <div className="homeIcon">
              <p>
                <BiHeart />
              </p>

              <p className="homeIcon1">Gaming</p>
            </div>
          </Link>
          <div className="homeIcon">
            <p>
              <BiFileBlank />
            </p>
            <Link to="/savedVideos" className="homeLink">
              <p className="homeIcon1">Saved Videos</p>
            </Link>
          </div>
        </div>
        <div className="addressContainer">
          <h3 className="h3">Contact Us</h3>
          <div className="socialContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
              alt="facebook logo"
              className="facebook"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
              alt="twitter logo"
              className="insta"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
              alt="linkedin logo"
              className="linkedin"
            />
          </div>
          <p className="h3">Enjoy now to see your channel and Recomondations</p>
        </div>
      </div>
    )
  }
}
export default FilterProducts
