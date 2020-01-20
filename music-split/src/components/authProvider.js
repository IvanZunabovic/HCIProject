import React, { Component } from "react"

class AuthProvider extends Component {
  static state
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      lastName: "",
      email: "",
      loggedIn: false,
    }
  }

  changeUser = loggedUser => {
    this.setState(loggedUser)
  }

  componentDidUpdate() {
    console.log("Auth state: ", this.state)
  }

  displayUserInfo = () => {
    this.props.getUserInfo(this.state)
  }

  render() {
    return <>{this.props.children}</>
  }
}

export default AuthProvider
