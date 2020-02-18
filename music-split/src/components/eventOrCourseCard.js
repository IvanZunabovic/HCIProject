import React from "react"
import Img from "gatsby-image"
import cart from "../images/cart.svg"
import downButton from "../images/down.png"

import filledStar from "../images/filled-star.svg"

const EventOrCourseCard = ({ image, eventAndCourseInfo }) => (
  <div className="event-card" id="event-card">
    <Img fluid={image} className="event-image" id="event-image" />
    <label className="event-tags" id="event-tags">
      {eventAndCourseInfo.tags}
    </label>
    <div className="event-info" id="event-info">
      <label className="event-title">{eventAndCourseInfo.title}</label>
      <label className="event-author">{eventAndCourseInfo.author}</label>
      <label className="event-description">
        {eventAndCourseInfo.description}
      </label>
    </div>
    <div className="event-info border-div" id="event-price-info">
      <label className="price-title">Price</label>
      <label className="event-price">{eventAndCourseInfo.price}</label>
      <label className="star-container">
        <img src={filledStar} alt="star" className="star" />
        <img src={filledStar} alt="star" className="star" />
        <img src={filledStar} alt="star" className="star" />
        <img src={filledStar} alt="star" className="star" />
        <img src={filledStar} alt="star" className="star" />
      </label>
      <div id="buttons-container">
        <button className="preview-button event-button">Preview</button>
        <button className="add-button event-button">
          <img src={cart} alt="shop cart" className="shop-cart" />
        </button>
      </div>
    </div>
    <img src={downButton} alt="down arrow" className="down-arrow-info hidden" />
  </div>
)

export default EventOrCourseCard
