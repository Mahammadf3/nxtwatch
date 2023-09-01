import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player/lazy'
import {AiOutlineLike, AiOutlineShareAlt, AiOutlineSave} from 'react-icons/ai'
import LanguageContext from '../../context'

import Header from '../Header'
import FilterProducts from '../FilterProducts'

import './index.css'

const data1 = {
  initial: 'initial',
  loading: 'loading',
  output: 'output',
  failure: 'faile',
}

class GamesListData extends Component {
  state = {
    hubData1: [],
    isActive: false,
    isReady: false,
    isLike: false,
    isShare: false,
    isActive1: data1.initial,
  }

  componentDidMount() {
    this.trendState1()
  }

  trendState1 = async () => {
    this.setState({isActive1: data1.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

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
      const hub2 = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedData: data.video_details.published_at,
        thumbnail: data.video_details.thumbnail_url,
        title: data.video_details.title,
        video: data.video_details.video_url,
        view: data.video_details.view_count,
        name: data.video_details.channel.name,
        profile: data.video_details.channel.profile_image_url,
        subscribe: data.video_details.channel.subscriber_count,
      }
      this.setState({hubData1: hub2, isActive1: data1.output})
    } else {
      this.setState({isActive1: data1.failure})
    }
  }

  changeColor = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  onSuccess2 = () => {
    const {hubData1, isActive} = this.state

    const homeContainerData = isActive
      ? 'homeContainer5871'
      : 'descriptionContainer121'
    const a = isActive && 'white21'
    const {
      id,
      description,
      publishedData,
      title,
      video,
      view,
      name,
      profile,
      subscribe,
    } = hubData1
    return (
      <LanguageContext.Consumer>
        {value => {
          const {onChange} = value
          const {isReady} = this.state

          const onSave = () => {
            onChange(hubData1)
            this.setState({isReady: !isReady})
          }
          const onSave2 = () => {
            this.setState(prevState => ({
              isLike: !prevState.isLike,
            }))
          }

          const onSave3 = () => {
            this.setState(prevState => ({
              isShare: !prevState.isShare,
            }))
          }
          const {isShare} = this.state
          const {isLike} = this.state
          const b = isReady && 'blue78'
          const c = isLike && 'blue78'
          const d = isShare && 'blue78'

          return (
            <div className={homeContainerData}>
              <Header isActive={isActive} changeColor={this.changeColor} />
              <div className="disContainer11">
                <FilterProducts />
                <div className="ulContainer11">
                  <ReactPlayer url={video} />
                  <p className={a}>{title}</p>
                  <div className="spaceData11">
                    <div className="kViews11">
                      <div className="viewContainer331">
                        <p className={a}>{view}</p>
                        <p className={`name11 ${a}`}>views</p>
                      </div>
                      <p className={a}>{publishedData}</p>
                    </div>
                    <div className="finalSpace11">
                      <div className="helloData11">
                        <AiOutlineLike
                          className={`liky11 ${a} ${d}`}
                          onClick={onSave3}
                        />
                        <p
                          className={`likeContainer11 ${a} ${d}`}
                          onClick={onSave3}
                        >
                          like
                        </p>
                      </div>
                      <div className="helloData11">
                        <AiOutlineShareAlt
                          className={`liky11 ${a} ${c}`}
                          onClick={onSave2}
                        />
                        <p
                          className={`likeContainer11 ${a} ${c}`}
                          onClick={onSave2}
                        >
                          share
                        </p>
                      </div>
                      <div className="helloData11">
                        <AiOutlineSave
                          className={`liky11 ${a} ${b}`}
                          onClick={onSave}
                        />
                        <p
                          className={`likeContainer11 ${a} ${b}`}
                          onClick={onSave}
                        >
                          save
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="line1" />
                  <div className="bottomLogo11">
                    <img
                      src={profile}
                      alt={`logo${id}`}
                      className="logoContainer1"
                    />
                    <div className="okContainer11">
                      <p className={a}>{name}</p>
                      <div className="helloMoto11">
                        <p className={a}>{subscribe}</p>
                        <p className="subscriber11"> subscribed</p>
                      </div>
                    </div>
                  </div>
                  <p className={a}>{description}</p>
                </div>
              </div>
            </div>
          )
        }}
      </LanguageContext.Consumer>
    )
  }

  failure1 = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="correct the connection"
        className="fail"
      />
    </div>
  )

  renderLoadingView2 = () => (
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

  render() {
    const {isActive1} = this.state

    switch (isActive1) {
      case data1.output:
        return this.onSuccess2()
      case data1.loading:
        return this.renderLoadingView2()
      case data1.failure:
        return this.failure1()
      default:
        return null
    }
  }
}

export default GamesListData
