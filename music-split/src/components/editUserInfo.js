import React from "react"
import editSvg from "../images/edit.svg"

const UserInfo = ({ userInfoDescription, userInfo }) => {
  return (
    <div className="user-info-field">
      <label className="user-info-description">{userInfoDescription}</label>
      <div className="edit-info-container">
        <label className="user-info">{userInfo}</label>
        <img src={editSvg} alt="edit icon" className="edit-icon" />
      </div>
    </div>
  )
}

export default UserInfo
