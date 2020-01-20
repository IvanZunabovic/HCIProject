import React, { useState } from "react"

const InputFields = ({ children, emailChanged, passwordChanged }) => {
  const [emailValidationError, setEmailValidationError] = useState("")
  const [passwordValidationError, setPasswordValidationError] = useState("")
  const [
    emailRequireLabelVisibility,
    setemailRequireLabelVisibility,
  ] = useState("hidden")
  const [
    passwordRequireLabelVisibility,
    setpasswordRequireLabelVisibility,
  ] = useState("hidden")
  const onEmailInputChanged = event => {
    emailChanged(event.target.value)
  }

  const onPasswordInputChanged = event => {
    passwordChanged(event.target.value)
  }

  const onBlurEvent = e => {
    if (e.currentTarget.value === "") {
      e.currentTarget.type === "email"
        ? setEmailValidationError("red-border")
        : setPasswordValidationError("red-border")

      e.currentTarget.type === "email"
        ? setemailRequireLabelVisibility("")
        : setpasswordRequireLabelVisibility("")
    }
  }

  const onFocusEvent = e => {
    e.currentTarget.type === "email"
      ? setEmailValidationError("")
      : setPasswordValidationError("")

    e.currentTarget.type === "email"
      ? setemailRequireLabelVisibility("hidden")
      : setpasswordRequireLabelVisibility("hidden")
  }

  return (
    <div className="input-fields-container">
      <div className="error-label-div">
        <input
          placeholder="Enter email"
          type="email"
          className={`input-fields email ${emailValidationError}`}
          onChange={onEmailInputChanged}
          onBlur={onBlurEvent}
          onFocus={onFocusEvent}
        />
        <label
          className={`email-error-label error-label ${emailRequireLabelVisibility}`}
        >
          Required
        </label>
      </div>
      <div className="error-label-div">
        <input
          placeholder="Password"
          type="password"
          className={`input-fields password ${passwordValidationError}`}
          onChange={onPasswordInputChanged}
          onBlur={onBlurEvent}
          onFocus={onFocusEvent}
        />
        <label
          className={`password-error-label error-label ${passwordRequireLabelVisibility}`}
        >
          Required
        </label>
      </div>
      {children}
    </div>
  )
}

export default InputFields
