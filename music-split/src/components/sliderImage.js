import React from "react"
import Img from "gatsby-image"

const SliderImage = ({ img, children, imageClassName }) => {
  return (
    <div className={"slider-element"}>
      <Img fluid={img} className={imageClassName} />
      {children}
    </div>
  )
}

export default SliderImage
