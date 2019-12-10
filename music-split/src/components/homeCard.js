import React from "react"
import Img from "gatsby-image"

const HomeCard = ({ img, text, title, cardClassName }) => {
  return (
    <div className={cardClassName}>
      <Img fluid={img} alt="Info card image" className="card-image" />
      <div className="info">
        <label className="info-title">{title}</label>
        <p className="text-description">{text}</p>
      </div>
    </div>
  )
}

export default HomeCard
