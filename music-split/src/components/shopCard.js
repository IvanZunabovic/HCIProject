import React from "react"
import Img from "gatsby-image"
import "../styles/store.css"
import star from "../images/star.svg"
import filledStar from "../images/filled-star.svg"

const ShopCard = ({ imageFluid, shopName }) => {
  const redirect = () => {
    window.location.replace("/no1MusicShop")
  }

  const dummy = () => {}
  return (
    <div
      className="shop-card"
      onClick={shopName == "Shop No1" ? redirect : dummy}
    >
      <Img fluid={imageFluid} />
      <div className="shop-description">
        <label className="shop-name">{shopName}</label>
        <div>
          <img src={filledStar} className="star" alt="filled star" />
          <img src={filledStar} className="star" alt="filled star" />
          <img src={filledStar} className="star" alt="filled star" />
          <img src={filledStar} className="star" alt="filled star" />
          <img src={star} className="star" alt="empty star" />
        </div>
      </div>
    </div>
  )
}

export default ShopCard
