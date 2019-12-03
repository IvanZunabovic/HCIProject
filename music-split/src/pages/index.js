import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Cover from "../components/cover"
import HomeCard from "../components/homeCard"
import "../styles/index.css"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <div>
      <Cover
        img={data.coverImage.childImageSharp.fluid}
        className="cover-image"
        title="Music Split"
        aboutText="Here at the Music Split our goal is to provide the highest quality services to all of our customers."
      />
      <Layout>
        <HomeCard
          img={data.cardImage.childImageSharp.fluid}
          title="About us"
          text="Lorem Ipsum"
          cardClassName="card-colored"
          className="card"
        ></HomeCard>

        <HomeCard
          img={data.cardImage.childImageSharp.fluid}
          title="About us"
          text="Lorem Ipsum"
          cardClassName="card"
          className="card"
        ></HomeCard>

        <HomeCard
          img={data.cardImage.childImageSharp.fluid}
          title="About us"
          text="Lorem Ipsum"
          cardClassName="card-colored"
          className="card"
        ></HomeCard>
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
  }
`
