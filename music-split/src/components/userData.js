import React from "react"
import Img from "gatsby-image"

const UserData = ({ fluid, user }) => {
  return (
    <div className="user-data">
      <Img fluid={fluid} className="profile-photo" />
      <div className="information-overview">
        <label className="user-name">{user.name + " " + user.lastName}</label>
        <label className="user-email">{user.email}</label>
      </div>
    </div>
  )
}

export default UserData
