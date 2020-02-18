import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "../styles/music-shop.css"
import arrowDown from "../images/down.png"

const guitars = [
  {
    guitarName: "Gibson Les Paul Custom Alex Lifeson Royal Crimson",
    price: "33.900,00 kn",
  },
  {
    guitarName: "Gibson SJ-200 Standard 2017 Vintage Sunburst",
    price: "33.900,00 kn",
  },
  { guitarName: "Ibanez RG8570Z-BRE J. CUSTOM", price: " 21.151,00 kn" },
  { guitarName: "Gibson ES-335 2015 Sunset Burst", price: " 19.999,00 kn" },
  { guitarName: "Gibson Les Paul Custom Wine Red", price: "19.990,00 kn" },
  { guitarName: "Maton EM100 808 Messiah", price: "19.791,00 kn" },
  {
    guitarName: "Gibson SG Standard Reissue Custom Shop VOS Faded Cherry",
    price: "21.712,00 kn",
  },
  {
    guitarName: "Gibson 60th Anniversary 1959 Les Paul Standard",
    price: "34.011,00 kn",
  },
  { guitarName: "Fender CLAPTON STRAT BLK, salonski", price: "13.900,00 kn" },
  {
    guitarName: "Gibson Firebird 2019 Vintage Sunburst",
    price: "13.990,00 kn",
  },
  { guitarName: "Gibson J-45 AG 2019 WALNUT ANTIQUE", price: "13.890,00 kn" },
  { guitarName: "Gibson Les Paul Studio BBQ Burst", price: "11.890,00 kn" },
  {
    guitarName: "Gibson Les Paul Standard 1957 CS7 Antique Gold VOS",
    price: " 35.991,00 kn",
  },
  { guitarName: "Gibson ES-335 2018 Figured Cherry", price: "29.900,00 kn" },
  { guitarName: "Gibson Les Paul Custom Ebony", price: " 27.990,00 kn" },
  {
    guitarName:
      "Gibson Advanced Jumbo Limited Edition Red Spruce Stage Edition",
    price: " 23.391,00 kn",
  },
  {
    guitarName: "Gibson 1960 Les Paul Standard Reissue",
    price: "44.990,00 kn",
  },
  {
    guitarName: "Gibson SG High Performance 2019 Trans Black Fade",
    price: "16.990,00 kn",
  },
  { guitarName: "Gibson Firebird Cherry", price: "13.990,00 kn" },
  {
    guitarName: "Gibson Les Paul Traditional 2019 Tobacco Burst",
    price: "19.990,00 kn",
  },
]

const Product = ({ image, guitar }) => {
  return (
    <div className="product-image">
      <Img fluid={image} className="image" />
      <p className="guitar-name">{guitar.guitarName}</p>
      <p className="guitar-name">{guitar.price}</p>
      <button className="button" id="add-button">
        Add to cart
      </button>
    </div>
  )
}

const No1MusicShop = ({ data }) => {
  const { edges } = data.allFile
  return (
    <Layout>
      <div className="music-shop-header">
        <label className="header-title">Music Shop No1</label>
        <label className="info-titles hidden">Kontakti</label>
        <img src={arrowDown} alt="arrow down" className="arrow-down" />
        <div className="infos">
          <div className="info_container">
            <label className="info-titles">Kontakt broj</label>
            <label>+385 (1) 6640 740</label>
          </div>
          <div className="info_container">
            <label className="info-titles">Kontakt E-mail</label>
            <label>info@musicshop-no1.hr</label>
          </div>
          <div className="info_container">
            <label className="info-titles">Poslovnice</label>
            <label>Gibson-Korg Centar</label>
            <label>Music Shop No1</label>
          </div>
        </div>
        <label className="products-title">Products</label>
      </div>
      <div className="products-grid">
        {edges.map((edge, index) => {
          return (
            <Product
              key={edge.node.childImageSharp.fluid.src}
              image={edge.node.childImageSharp.fluid}
              guitar={guitars[index]}
            />
          )
        })}
      </div>
      <Footer />
    </Layout>
  )
}

export default No1MusicShop
export const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/guitar/" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
