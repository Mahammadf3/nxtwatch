import {Component} from 'react'
import PrimeDeals from '../PrimeDeals'
import NonPrime from '../NonPrime'

import './index.css'

class AllProducts extends Component {
  state = {isActive: true}

  changeData = isActive => {
    this.setState({isActive: !isActive})
  }

  render() {
    const {isActive} = this.state
    return (
      <div className="allProductContainer">
        {isActive && (
          <PrimeDeals isActive={isActive} changeData={this.changeData} />
        )}
        <NonPrime />
      </div>
    )
  }
}
export default AllProducts
