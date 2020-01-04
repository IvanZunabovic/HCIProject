import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Cover from "../components/cover"
import HomeCard from "../components/homeCard"
import "../styles/index.css"
import Footer from "../components/footer"
import Slider from "../components/slider"

const IndexPage = ({ data }) => {
  const { fluid: coverImg } = data.coverImage.childImageSharp
  const { fluid: aboutImg } = data.cardImage.childImageSharp
  const { edges: sliderImgArr } = data.sliderImages
  const { fluid: leftArrowIcon } = data.leftArrowIcon.childImageSharp
  const { fluid: rightArrowIcon } = data.rightArrowIcon.childImageSharp

  return (
    <div>
      <Cover
        img={coverImg}
        className="cover-image"
        title="Music Split"
        aboutText="Here at the Music Split our goal is to provide the highest quality services to all of our customers."
      />
      <Layout>
        <HomeCard
          img={aboutImg}
          title="About us"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          cardClassName="card"
        />
        <label className="shops-container-title">Shops</label>
        <Slider
          sliderImgs={sliderImgArr}
          leftArrow={leftArrowIcon}
          rightArrow={rightArrowIcon}
        ></Slider>
        <label className="shops-container-title">Upcoming Events</label>
        <Slider
          sliderImgs={sliderImgArr}
          leftArrow={leftArrowIcon}
          rightArrow={rightArrowIcon}
        ></Slider>
        <label className="shops-container-title">Popular Courses</label>
        <Slider
          sliderImgs={sliderImgArr}
          leftArrow={leftArrowIcon}
          rightArrow={rightArrowIcon}
        ></Slider>
        <Footer />
      </Layout>
    </div>
  )
}

export default IndexPage
export const query = graphql`
  query {
    coverImage: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage: file(relativePath: { eq: "about-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sliderImages: allFile(filter: { relativePath: { regex: "/shop/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    leftArrowIcon: file(relativePath: { eq: "left-arrow.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    rightArrowIcon: file(relativePath: { eq: "right-arrow.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
