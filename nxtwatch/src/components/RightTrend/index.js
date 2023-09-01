import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ListOfTrendVideos from '../ListOfTrendVideos'

import './index.css'

const data1 = {
  initial: 'initial',
  loading: 'loading',
  output: 'output',
  failure: 'faile',
}

class RightTrend extends Component {
  state = {isTrend: [], isActive: data1.initial}

  componentDidMount() {
    this.isTrend()
  }

  isTrend = async () => {
    this.setState({isActive: data1.loading})
    const url = 'https://apis.ccbp.in/videos/trending'

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

      const fetchTrend = data.videos.map(eachItem => ({
        id: eachItem.id,
        published: eachItem.published_at,
        thumbnail: eachItem.thumbnail_url,
        title: eachItem.title,
        view: eachItem.view_count,
        name: eachItem.channel.name,
        profile: eachItem.channel.profile_image_url,
      }))
      this.setState({isTrend: fetchTrend, isActive: data1.output})
    } else {
      this.setState({isActive: data1.failure})
    }
  }

  onSuccess = () => {
    const {isTrend} = this.state
    const {isActive} = this.props
    return (
      <div>
        <ul className="isTrend">
          {isTrend.map(eachItem => (
            <ListOfTrendVideos
              eachItem={eachItem}
              key={eachItem.id}
              isActive={isActive}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container align">
      <Loader
        type="ThreeDots"
        color="#0b69ff"
        height="50"
        width="50"
        className="threeDots"
      />
    </div>
  )

  failure = () => (
    <div>
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

export default RightTrend
