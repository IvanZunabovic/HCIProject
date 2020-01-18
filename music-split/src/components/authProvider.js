import React, { Component } from "react"

export const AuthContext = React.createContext({
  name: "",
  lastName: "",
  email: "",
  logedIn: false,
})

class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.currentUser = {
      name: "",
      lastName: "",
      email: "",
      logedIn: false,
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.currentUser}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider
