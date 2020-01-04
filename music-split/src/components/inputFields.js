import React from "react"

const InputFields = ({ children }) => {
  return (
    <div className="input-fields-container">
      <input placeholder="Enter email" type="email" className="input-fields" />
      <input placeholder="Password" type="password" className="input-fields" />
      {children}
    </div>
  )
}

export default InputFields
