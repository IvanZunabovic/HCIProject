import React from "react"

const InputFields = ({ children, emailChanged, passwordChanged }) => {
  return (
    <div className="input-fields-container">
      <input
        placeholder="Enter email"
        type="email"
        className="input-fields"
        onChange={emailChanged}
      />
      <input
        placeholder="Password"
        type="password"
        className="input-fields"
        onChange={passwordChanged}
      />
      {children}
    </div>
  )
}

export default InputFields
