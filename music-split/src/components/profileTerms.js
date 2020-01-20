import React from "react"

const ProfileTerms = ({ children }) => {
  return (
    <div className="profile-settings-title">
      <label className="manage-information-title">
        Manage your personal information
      </label>
      <label className="terms-and-service-label">
        Control which information people see and Power-Ups may access. To learn
        more, view our Terms of Service or Privacy Policy.
      </label>
      {children}
    </div>
  )
}

export default ProfileTerms
