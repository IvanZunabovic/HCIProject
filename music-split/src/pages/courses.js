import React from "react"
import Layout from "../components/layout"
import SearchBar from "../components/searchBar"
import EventOrCourseCard from "../components/eventOrCourseCard"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import "../styles/searchBar.css"
import "../styles/courses.css"
import downArrow from "../images/down.png"

const CheckboxFilter = ({ filterName }) => {
  const activeFilter = e => {
    const cards = document.querySelectorAll(".event-card")
    const filter = e.currentTarget

    filter.classList.contains("active")
      ? filter.classList.remove("active")
      : filter.classList.add("active")

    cards.forEach(card => {
      if (
        !filter.classList.contains("active") &&
        !card
          .querySelector(".event-tags")
          .innerHTML.includes(
            filter.innerHTML.replace(
              `<input type="checkbox"><span class="checkmark"></span>`,
              ""
            )
          )
      ) {
        card.style.cssText = "display: none;"
      }
      if (filter.classList.contains("active")) {
        card.style.cssText = "display: flex;"
      }
    })
  }

  return (
    <label className="checkbox-label" onClick={activeFilter}>
      {filterName}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  )
}

const CheckboxFiltersContainer = () => {
  return (
    <div className="checkbox-filters-container" id="filter-container">
      <CheckboxFilter filterName="Vocal" />
      <CheckboxFilter filterName="Guitar" />
      <CheckboxFilter filterName="Bass" />
      <CheckboxFilter filterName="Drums" />
      <CheckboxFilter filterName="Keys" />
      <CheckboxFilter filterName="Piano" />
      <CheckboxFilter filterName="Sax" />
      <CheckboxFilter filterName="Trombone" />
      <CheckboxFilter filterName="Cello" />
      <CheckboxFilter filterName="Viola" />
      <CheckboxFilter filterName="Violin" />
    </div>
  )
}

const Courses = ({ data }) => {
  const { edges } = data.coursesImages
  const { coursesInfo } = data.coursesInfo.siteMetadata

  return (
    <Layout>
      <SearchBar />
      <div className="checkbox-filters">
        <label className="checkbox-filters-label">Filters</label>
        <CheckboxFiltersContainer />
        <img
          src={downArrow}
          alt="down arrow"
          className="down-arrow hidden"
          id="down-arrow"
        />
      </div>
      <div className="events-card-container">
        {edges.map((item, index) => {
          return (
            <EventOrCourseCard
              key={item.node.childImageSharp.fluid.src}
              image={item.node.childImageSharp.fluid}
              eventAndCourseInfo={coursesInfo[index]}
            />
          )
        })}
      </div>
      <Footer />
    </Layout>
  )
}

export default Courses
export const query = graphql`
  {
    coursesImages: allFile(filter: { relativePath: { regex: "/lesson/" } }) {
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

    coursesInfo: site {
      siteMetadata {
        coursesInfo {
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
