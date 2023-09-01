import {Component} from 'react'

import Header from '../Header'

import FilterProducts from '../FilterProducts'

import GamesList from '../GamesList'

import './index.css'

class Game extends Component {
  state = {isActive: false}

  changeColor = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const homeContainerData = isActive ? 'homeContainer55' : 'homeContainer5'
    return (
      <div className={homeContainerData}>
        <Header isActive={isActive} changeColor={this.changeColor} />
        <div className="subGameContainer">
          <FilterProducts />
          <GamesList isActive={isActive} />
        </div>
      </div>
    )
  }
}

export default Game
