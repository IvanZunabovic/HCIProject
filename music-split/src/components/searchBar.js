import React from "react"
import "../styles/searchBar.css"
import searchIcon from "../images/search.png"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input-field-container">
        <input
          type="text"
          className="search-input-field"
          placeholder="Search"
        />
      </div>
      <div className="triangle" />
      <img src={searchIcon} alt="search icon" className="search-icon" />
    </div>
  )
}

export default SearchBar
