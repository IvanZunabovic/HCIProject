import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Cover from "../components/cover"
import "../styles/index.css"

const IndexPage = ({ data }) => {
  return (
    <div>
      <Cover
        img={data.file.childImageSharp.fluid}
        title="Music Split"
        styleClass="default-backround"
      />
      <Layout>
        <h1>Test</h1>
      </Layout>
    </div>
  )
}

export default IndexPage
export const query = graphql`
  query {
    file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`
