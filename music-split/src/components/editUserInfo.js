import React from "react"

const UserInfo = ({ userInfoDescription, userInfo }) => {
  return (
    <div className="user-info-field">
      <label className="user-info-description">{userInfoDescription}</label>
      <label className="user-info">{userInfo}</label>
    </div>
  )
}

export default UserInfo
