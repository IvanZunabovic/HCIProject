import React from "react"
import SliderImage from "./sliderImage"
import Img from "gatsby-image"

const Slider = ({ sliderImgs, leftArrow, rightArrow }) => {
  return (
    <div className="slider">
      <Img fluid={leftArrow} className="arrow left-arrow" />
      {sliderImgs.map(element => {
        const { fluid } = element.node.childImageSharp
        return (
          <SliderImage
            img={fluid}
            key={fluid.src}
            imageClassName={
              sliderImgs.indexOf(element) === 0 ||
              sliderImgs.indexOf(element) === sliderImgs.length - 1
                ? "shop-image-gray shop-image"
                : "shop-image"
            }
          >
            <label className="shop-name">Shop</label>
          </SliderImage>
        )
      })}
      <Img fluid={rightArrow} className="arrow right-arrow" />
    </div>
  )
}

export default Slider
