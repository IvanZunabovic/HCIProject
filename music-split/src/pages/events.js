import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SearchBar from "../components/searchBar"
import GenreFilter from "../components/genreFilter"
import Footer from "../components/footer"
import "../styles/events.css"
import "../styles/searchBar.css"
import filledStar from "../images/filled-star.svg"
import cart from "../images/cart.svg"
import { graphql } from "gatsby"

const FilterBox = () => {
  const dateOptionClick = () => {
    const hiddenOptions = document.querySelector(".hidden-date-filter-options")
    hiddenOptions.classList.contains("hidden")
      ? hiddenOptions.classList.remove("hidden")
      : hiddenOptions.classList.add("hidden")
  }

  return (
    <div className="date-filter-options-container">
      <label className="date-filter-option" onClick={dateOptionClick}>
        Date
      </label>
      <div className="hidden-date-filter-options hidden">
        <label className="hidden-filter-option">Tonight</label>
        <label className="hidden-filter-option">Tomorrow</label>
        <label className="hidden-filter-option">This Weekend</label>
        <label className="hidden-filter-option">Next Week</label>
        <label className="hidden-filter-option">Next Month</label>
      </div>
    </div>
  )
}

const EventCard = ({ image, eventInfo }) => {
  return (
    <div className="event-card">
      <Img fluid={image} className="event-image" />
      <label className="event-tags">{eventInfo.tags}</label>
      <div className="event-info">
        <label className="event-title">{eventInfo.title}</label>
        <label className="event-author">{eventInfo.author}</label>
        <label className="event-description">{eventInfo.description}</label>
      </div>
      <div className="event-info" id="event-price-info">
        <label className="price-title">Price</label>
        <label className="event-price">{eventInfo.price}</label>
        <div className="star-container">
          <img src={filledStar} alt="star" className="star" />
          <img src={filledStar} alt="star" className="star" />
          <img src={filledStar} alt="star" className="star" />
          <img src={filledStar} alt="star" className="star" />
          <img src={filledStar} alt="star" className="star" />
        </div>
        <div id="buttons-container">
          <button className="preview-button event-button">Preview</button>
          <button className="add-button event-button">
            <img src={cart} alt="shop cart" className="shop-cart" />
          </button>
        </div>
      </div>
    </div>
  )
}

const Events = ({ data }) => {
  const { edges } = data.concertImages
  const { eventInfo } = data.eventsInfo.siteMetadata
  return (
    <Layout>
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="filters-container">
        <label className="genre-filters-label">Genre Filters</label>
        <GenreFilter />
      </div>
      <div className="checkbox-filters-container">
        <FilterBox />
        <div className="sort-button">
          <label className="sort-button-label">Sort</label>
          <img
            src="https://img.icons8.com/material/24/000000/down--v2.png"
            alt="arrow"
          />
        </div>
      </div>
      <div className="event-cards-container">
        {edges.map((item, index) => {
          return (
            <EventCard
              key={item.node.childImageSharp.fluid.src}
              image={item.node.childImageSharp.fluid}
              eventInfo={eventInfo[index]}
            />
          )
        })}
      </div>
      <Footer />
    </Layout>
  )
}

export default Events
export const query = graphql`
  {
    concertImages: allFile(filter: { relativePath: { regex: "/concert/" } }) {
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

    eventsInfo: site {
      siteMetadata {
        eventInfo {
          author
          price
          tags
          title
          description
        }
      }
    }
  }
`
