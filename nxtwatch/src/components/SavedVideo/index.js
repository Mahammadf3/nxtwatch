import {Component} from 'react'
import LanguageContext from '../../context'
import SaveList from '../SaveList'
import Header from '../Header'
import FilterProducts from '../FilterProducts'

import './index.css'

class SavedVideo extends Component {
  state = {isActive: false}

  changeColor = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const homeContainerData = isActive ? 'homeContainer19' : 'containData'
    return (
      <LanguageContext.Consumer>
        {value => {
          const {savedData} = value
          if (savedData.length > 0) {
            return (
              <div className={homeContainerData}>
                <Header isActive={isActive} changeColor={this.changeColor} />
                <div className="hiData3">
                  <FilterProducts />
                  <div className="hiData5">
                    {savedData.map(eachItem => (
                      <SaveList
                        eachItem={eachItem}
                        key={eachItem.id}
                        isActive={isActive}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          }

          return (
            <div className={homeContainerData}>
              <Header isActive={isActive} changeColor={this.changeColor} />
              <div className="hiData33">
                <FilterProducts />
                <div className="hiData55">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved video"
                    className="noSave"
                  />
                </div>
              </div>
            </div>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}
export default SavedVideo
