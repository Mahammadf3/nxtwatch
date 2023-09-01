import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {BiSearch} from 'react-icons/bi'

import ListOfNonPrime from '../ListOfNonPrime'

import './index.css'

const data1 = {
  initial: 'initial',
  loading: 'loading',
  output: 'output',
  failure: 'faile',
}

class NonPrime extends Component {
  state = {
    listOfNon: [],
    isActive: data1.initial,
    search: '',
  }

  componentDidMount() {
    this.isList()
  }

  isList = async () => {
    this.setState({isActive: data1.loading})

    const url = 'https://apis.ccbp.in/videos/all'
    const options = {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const fetchAllData = data.videos.map(eachItem => ({
        id: eachItem.id,
        published: eachItem.published_at,
        thumNailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        view: eachItem.view_count,
        name: eachItem.channel.name,
        profile: eachItem.channel.profile_image_url,
      }))

      this.setState({listOfNon: fetchAllData, isActive: data1.output})
    } else {
      this.setState({isActive: data1.failure})
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  onSuccess = () => {
    const {listOfNon, search} = this.state
    const listOfNon1 = listOfNon.filter(eachItem =>
      eachItem.title.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="nonPrimeContainer">
        <div className="primeSearch">
          <input
            type="search"
            className="search"
            placeholder="search"
            onChange={this.onSearch}
          />
          <button type="button">
            <BiSearch />
          </button>
        </div>
        <ul className="nonPrimeList1">
          {listOfNon1.map(eachItem => (
            <ListOfNonPrime eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  failure = () => (
    <div>
      <h1 className="red">Refresh the page</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="correct the connection"
        className="fail"
      />
    </div>
  )

  render() {
    const {isActive} = this.state

    switch (isActive) {
      case data1.output:
        return this.onSuccess()
      case data1.loading:
        return this.renderLoadingView()
      case data1.failure:
        return this.failure()
      default:
        return null
    }
  }
}

export default NonPrime
