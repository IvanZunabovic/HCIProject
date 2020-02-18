import React from "react"
import EditUserInfo from "../components/editUserInfo"
import creditCard from "../images/master-card.svg"
import paypal from "../images/paypal.svg"
import amazon from "../images/amazon.svg"

const AccountInfoSettings = ({ user }) => {
  return (
    <div className="info-settings">
      <div className="personal-info">
        <div className="detail-type-label-container" id="personal-info">
          <label className="details-type-label">Personal Info</label>
        </div>
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
        <div className="detail-type-label-container" id="label">
          <label className="details-type-label">Payments</label>
        </div>
        <div className="payment-option">
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="card-and-label-container">
            <img src={paypal} alt="paypal" className="credit-card-image" />
            <label className="payment-option-label">Paypal</label>
          </div>
        </div>
        <div className="payment-option">
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="card-and-label-container">
            <img
              src={creditCard}
              alt="credit-card"
              className="credit-card-image"
            />
            <label className="payment-option-label">Credit Card</label>
          </div>
        </div>
        <div className="payment-option">
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="card-and-label-container">
            <img src={amazon} alt="amazon" className="credit-card-image" />
            <label className="payment-option-label">amazon</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfoSettings
