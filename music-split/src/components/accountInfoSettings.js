import React from "react"
import EditUserInfo from "../components/editUserInfo"

const AccountInfoSettings = () => {
  return (
    <div className="info-settings">
      <div className="personal-info">
        <label className="details-type-label">Personal Info</label>
        <EditUserInfo
          userInfoDescription="Full Name"
          userInfo="Ivan Žunabović"
        />
        <EditUserInfo userInfoDescription="Initials" userInfo="IŽ" />
        <EditUserInfo
          userInfoDescription="User Name"
          userInfo="@ivanzunabovic"
        />
        <EditUserInfo
          userInfoDescription="Address"
          userInfo="Put Salduna I 63, Trogir"
        />
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
