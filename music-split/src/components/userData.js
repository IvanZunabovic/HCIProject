import React from "react"
import Img from "gatsby-image"

const UserData = ({ fluid }) => {
  return (
    <div className="user-data">
      <Img fluid={fluid} className="profile-photo" />
      <div className="information-overview">
        <label className="user-name">Ivan Žunabović</label>
        <label className="user-email">ivan.zunabovic1234@gmail.com</label>
      </div>
    </div>
  )
}

export default UserData
