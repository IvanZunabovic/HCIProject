import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Cover from "../components/cover"

const IndexPage = ({ data }) => (
  <Layout>
    <Cover
      img={data.img.childImageSharp.fluid}
      title="Music Split"
      styleClass="default-backround"
    />
    <h1>Test</h1>
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    img: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
