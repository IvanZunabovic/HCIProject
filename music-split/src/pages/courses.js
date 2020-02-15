import React from "react"
import Layout from "../components/layout"
import SearchBar from "../components/searchBar"
import "../styles/searchBar.css"

const Courses = () => {
  return (
    <Layout>
      <SearchBar />
    </Layout>
  )
}

const Filter = ({ filterName }) => {
  return (
    <label class="checkbox-label">
      {filterName}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  )
}

export default Courses
