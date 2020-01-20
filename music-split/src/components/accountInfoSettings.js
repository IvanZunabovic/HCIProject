import React from "react"
import EditUserInfo from "../components/editUserInfo"

const AccountInfoSettings = ({ user }) => {
  return (
    <div className="info-settings">
      <div className="personal-info">
        <label className="details-type-label">Personal Info</label>
        <EditUserInfo
          userInfoDescription="Full Name"
          userInfo={`${user.name} ${user.lastName}`}
        />
        <EditUserInfo
          userInfoDescription="Initials"
          userInfo={`${user.name[0] + user.lastName[0]}`}
        />
        <EditUserInfo
          userInfoDescription="User Name"
          userInfo={`${user.email.replace("@gmail.com", "")}`}
        />
        <EditUserInfo userInfoDescription="Address" userInfo="Not Set" />
      </div>
      <div className="personal-info">
        <label className="details-type-label">Payments</label>
      </div>
      <div className="personal-info">
        <label className="details-type-label">Payments</label>
      </div>
    </div>
  )
}

export default AccountInfoSettings
