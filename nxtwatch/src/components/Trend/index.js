import {Component} from 'react'

import Header from '../Header'
import RightTrend from '../RightTrend'
import FilterProducts from '../FilterProducts'

import './index.css'

class Trend extends Component {
  state = {isActive: false}

  changeColor = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const homeContainerData = isActive ? 'homeContainer4' : 'homeContainer3'
    return (
      <div className={homeContainerData}>
        <Header isActive={isActive} changeColor={this.changeColor} />
        <div className="hello">
          <FilterProducts />
          <RightTrend isActive={isActive} />
        </div>
      </div>
    )
  }
}
export default Trend
