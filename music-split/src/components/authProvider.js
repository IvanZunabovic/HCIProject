import React, { Component } from "react"

class AuthProvider extends Component {
  userState = {
    name: "not signed in",
    lastName: "",
    email: "",
    logedIn: null,
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export const AuthContext = React.createContext()
export default AuthProvider
