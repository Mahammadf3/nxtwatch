import {Component} from 'react'

import {BsX} from 'react-icons/bs'

import './index.css'

class PrimeDeals extends Component {
  onCross = () => {
    const {changeData, isActive} = this.props
    changeData(isActive)
  }

  render() {
    return (
      <div className="containerPrime">
        <div className="banner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="primeLogo"
          />
          <p>Buy NXTWatch premium prepaid plan with upi </p>
          <button type="button">GetItNow</button>
        </div>
        <BsX className="cross" onClick={this.onCross} />
      </div>
    )
  }
}

export default PrimeDeals
