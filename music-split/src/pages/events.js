import React from "react"
import Layout from "../components/layout"
import SearchBar from "../components/searchBar"
import GenreFilter from "../components/genreFilter"
import Footer from "../components/footer"
import EventOrCourseCard from "../components/eventOrCourseCard"
import "../styles/events.css"
import "../styles/searchBar.css"
import { graphql } from "gatsby"

const FilterBox = () => {
  return (
    <div className="date-filter-options-container">
      <label className="date-filter-option">Date</label>
      <div className="hidden-date-filter-options hidden-options">
        <label className="hidden-filter-option">Tonight</label>
        <label className="hidden-filter-option">Tomorrow</label>
        <label className="hidden-filter-option">This Weekend</label>
        <label className="hidden-filter-option">Next Week</label>
        <label className="hidden-filter-option">Next Month</label>
      </div>
    </div>
  )
}

const Events = ({ data }) => {
  const { edges } = data.concertImages
  const { eventInfo } = data.eventsInfo.siteMetadata
  return (
    <Layout>
      <SearchBar />
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
            <EventOrCourseCard
              key={item.node.childImageSharp.fluid.src}
              image={item.node.childImageSharp.fluid}
              eventAndCourseInfo={eventInfo[index]}
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
