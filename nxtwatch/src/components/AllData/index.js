import {Component} from 'react'

import ReactPlayer from 'react-player/lazy'
import {AiOutlineLike, AiOutlineShareAlt, AiOutlineSave} from 'react-icons/ai'

import LanguageContext from '../../context'

import Header from '../Header'
import FilterProducts from '../FilterProducts'

import './index.css'

class AllData extends Component {
  state = {
    hubData: [],
    isActive: false,
    isReady: false,
    isLike: false,
    isShare: false,
  }

  componentDidMount() {
    this.trendState()
  }

  trendState = async () => {
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

      const hub1 = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedData: data.video_details.published_at,
        title: data.video_details.title,
        thumbnail: data.video_details.thumbnail_url,
        video: data.video_details.video_url,
        view: data.video_details.view_count,
        name: data.video_details.channel.name,
        profile: data.video_details.channel.profile_image_url,
        subscribe: data.video_details.channel.subscriber_count,
      }
      this.setState({hubData: hub1})
    }
  }

  changeColor = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {hubData, isActive} = this.state

    const homeContainerData = isActive
      ? 'homeContainer587'
      : 'descriptionContainer12'
    const a = isActive && 'white2'
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
    } = hubData
    return (
      <LanguageContext.Consumer>
        {value => {
          const {onChange} = value

          const onSave = () => {
            onChange(hubData)
            const {isReady} = this.state
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

          const {isReady} = this.state
          const {isShare} = this.state
          const {isLike} = this.state
          const b = isReady && 'blue78'
          const c = isLike && 'blue78'
          const d = isShare && 'blue78'

          return (
            <div className={homeContainerData}>
              <Header isActive={isActive} changeColor={this.changeColor} />
              <div className="disContainer1">
                <FilterProducts />
                <div className="ulContainer1">
                  <ReactPlayer url={video} />
                  <p className={a}>{title}</p>
                  <div className="spaceData1">
                    <div className="kViews1">
                      <div className="viewContainer33">
                        <p className={a}>{view}</p>
                        <p className={`name1 ${a}`}>views</p>
                      </div>
                      <p className={a}>{publishedData}</p>
                    </div>
                    <div className="finalSpace1">
                      <div className="helloData1">
                        <AiOutlineLike
                          className={`liky1 ${a} ${c}`}
                          onClick={onSave2}
                        />
                        <p
                          className={`likeContainer1 ${a} ${c}`}
                          onClick={onSave2}
                        >
                          like
                        </p>
                      </div>
                      <div className="helloData1">
                        <AiOutlineShareAlt
                          className={`liky1 ${a} ${d}`}
                          onClick={onSave3}
                        />
                        <p
                          className={`likeContainer1 ${a} ${d}`}
                          onClick={onSave3}
                        >
                          share
                        </p>
                      </div>
                      <div className="helloData1">
                        <AiOutlineSave
                          className={`liky1 ${a} ${b}`}
                          onClick={onSave}
                        />
                        <p
                          className={`likeContainer1 ${a} ${b}`}
                          onClick={onSave}
                        >
                          save
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="line" />
                  <div className="bottomLogo1">
                    <img
                      src={profile}
                      alt={`logo${id}`}
                      className="logoContainer"
                    />
                    <div className="okContainer1">
                      <p className={a}>{name}</p>
                      <div className="helloMoto1">
                        <p className={a}>{subscribe}</p>
                        <p className="subscriber1"> subscribed</p>
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
}

export default AllData
