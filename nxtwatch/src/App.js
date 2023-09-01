import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trend from './components/Trend'
import Game from './components/Game'
import ProductDescription from './components/ProductDescription'
import AllData from './components/AllData'
import GamesListData from './components/GamesListData'
import SavedVideo from './components/SavedVideo'

import LanguageContext from './context/index'
import NotFound from './components/NotFound/index'

import './App.css'

class App extends Component {
  state = {savedData: []}

  onChange = data => {
    this.setState(prevState => ({
      savedData: [...prevState.savedData, data],
    }))
  }

  render() {
    const {savedData} = this.state

    return (
      <LanguageContext.Provider value={{savedData, onChange: this.onChange}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/trend" component={Trend} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/all/:id" component={ProductDescription} />
            <Route exact path="/trend/:id" component={AllData} />
            <Route exact path="/games/:id" component={GamesListData} />
            <Route exact path="/savedVideos" component={SavedVideo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </LanguageContext.Provider>
    )
  }
}

export default App
