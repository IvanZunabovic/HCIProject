import React from "react"
import Img from "gatsby-image"
import "../styles/cover.css"

const Cover = ({ img, title, children, aboutText }) => {
  return (
    <div className="cover-section">
      <Img fluid={img} alt="Cover image" className="cover-image" />
      <div className="cover-text">
        <h1 className="title">{title}</h1>
        <label className="about-label">{aboutText}</label>
      </div>
      {children}
    </div>
  )
}

export default Cover

Cover.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
