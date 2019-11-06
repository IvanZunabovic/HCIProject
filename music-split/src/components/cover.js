import React from "react"
import BackgroundImage from "gatsby-background-image"

const Cover = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title">{title}</h1>
      {children}
    </BackgroundImage>
  )
}

export default Cover

Cover.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
