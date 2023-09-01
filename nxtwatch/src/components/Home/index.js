import {Component} from 'react'

import Header from '../Header'
import Products from '../Products'
import './index.css'

class Home extends Component {
  state = {isActive: false}

  changeColor = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const homeContainerData = isActive ? 'homeContainer1' : 'homeContainer'

    return (
      <div className={homeContainerData}>
        <Header
          isActive={isActive}
          changeColor={this.changeColor}
          className="topHead"
        />
        <Products />
      </div>
    )
  }
}

export default Home
