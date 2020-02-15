import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/store.css"
import ShopCard from "../components/shopCard"
import Footer from "../components/footer"

const shopNames = ["Music Max", "Muziker", "Shop No1"]

const Store = ({ data }) => {
  const { instrumentsCoverImage } = data
  const { edges: storeImagesEdges } = data.storeImages
  return (
    <Layout>
      <div className="store-cover-container">
        <Img
          fluid={instrumentsCoverImage.childImageSharp.fluid}
          className="store-cover-image"
        />
        <label className="store-cover-label">
          Equip your studio with new gear
        </label>
      </div>
      <div className="shop-card-container">
        {storeImagesEdges.map((image, index) => {
          return (
            <ShopCard
              key={image.node.childImageSharp.fluid.src}
              imageFluid={image.node.childImageSharp.fluid}
              shopName={shopNames[index]}
              className="shop-card-component"
            />
          )
        })}
      </div>
      <Footer />
    </Layout>
  )
}

export default Store

export const query = graphql`
  {
    instrumentsCoverImage: file(relativePath: { eq: "instruments.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    storeImages: allFile(filter: { relativePath: { regex: "/store/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
