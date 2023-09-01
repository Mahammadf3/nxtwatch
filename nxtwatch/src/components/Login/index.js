import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    message: '',
  }

  onSuccesData = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = msg => {
    this.setState({message: msg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccesData(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {message} = this.state
    return (
      <div className="container">
        <form className="container1" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="logo"
          />
          <>
            <p className="p min"> userName</p>
            <input
              className="min"
              type="text"
              placeholder="UserName"
              onChange={this.onChangeUsername}
            />
          </>
          <>
            <p className="min">password</p>

            <input
              className="min"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </>

          <button type="submit" className="but">
            Login
          </button>
          <p className="m">{message}</p>
        </form>
      </div>
    )
  }
}

export default Login
