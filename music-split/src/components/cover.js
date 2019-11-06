import React from "react"
import Img from "gatsby-image"
import "../styles/cover.css"

const Cover = ({ img, styleClass, title, children }) => {
  return (
    <div className="cover-section">
      <Img fluid={img} alt="Cover image"></Img>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  )
}

export default Cover

Cover.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
