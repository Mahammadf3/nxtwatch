import {Component} from 'react'

import ReactPlayer from 'react-player/lazy'
import {AiOutlineLike, AiOutlineShareAlt, AiOutlineSave} from 'react-icons/ai'
import LanguageContext from '../../context/index'

import Header from '../Header'
import './index.css'
import FilterProducts from '../FilterProducts'

class ProductDescription extends Component {
  state = {
    allDetails: [],
    isActive: false,
    isReady: false,
    isLike: false,
    isShare: false,
  }

  componentDidMount() {
    this.isFetch()
  }

  isFetch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const fetchData = {
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
      this.setState({allDetails: fetchData})
    }
  }

  changeColor = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {allDetails, isActive} = this.state

    const homeContainerData = isActive
      ? 'homeContainer58'
      : 'descriptionContainer'
    const a = isActive && 'white'
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
    } = allDetails
    return (
      <LanguageContext.Consumer>
        {value => {
          const {onChange} = value
          const {isReady} = this.state

          const onSave = () => {
            onChange(allDetails)
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
              <div className="disContainer">
                <FilterProducts />
                <div className="ulContainer">
                  <ReactPlayer url={video} />
                  <p className={a}>{title}</p>
                  <div className="spaceData">
                    <div className="kViews">
                      <div className="viewContainer3">
                        <p className={a}>{view}</p>
                        <p className={`name ${a}`}>views</p>
                      </div>
                      <p className={a}>{publishedData}</p>
                    </div>
                    <div className="finalSpace">
                      <div className="helloData">
                        <AiOutlineLike
                          className={`liky ${a} ${c}`}
                          onClick={onSave2}
                        />
                        <p
                          className={`likeContainer ${a} ${c}`}
                          onClick={onSave2}
                        >
                          like
                        </p>
                      </div>
                      <div className="helloData">
                        <AiOutlineShareAlt
                          className={`liky ${a} ${d}`}
                          onClick={onSave3}
                        />
                        <p
                          className={`likeContainer ${a} ${d}`}
                          onClick={onSave3}
                        >
                          share
                        </p>
                      </div>
                      <div className="helloData">
                        <AiOutlineSave
                          className={`liky ${a} ${b}`}
                          onClick={onSave}
                        />
                        <p
                          className={`likeContainer ${a} ${b}`}
                          onClick={onSave}
                        >
                          save
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="line" />
                  <div className="bottomLogo">
                    <img
                      src={profile}
                      alt={`logo${id}`}
                      className="logoContainer"
                    />
                    <div className="okContainer">
                      <p className={a}>{name}</p>
                      <div className="helloMoto">
                        <p className={a}>{subscribe}</p>
                        <p className="subscriber"> subscribed</p>
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

export default ProductDescription
