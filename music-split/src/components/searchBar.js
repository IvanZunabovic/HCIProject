import React, { useEffect } from "react"
import "../styles/searchBar.css"
import searchIcon from "../images/search.png"

const SearchBar = () => {
  const search = () => {
    const cards = document.querySelectorAll(".event-card")
    const inputField = document.querySelector(".search-input-field")

    cards.forEach(card => {
      const title = card.querySelector(".event-title").innerHTML

      if (inputField.value !== "" && !title.includes(inputField.value)) {
        console.log(title, inputField.value)
        card.style.cssText = "display: none;"
      } else if (inputField.value === "") {
        card.style.cssText = "display: flex;"
      }
    })
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-input-field-container">
          <input
            type="text"
            className="search-input-field"
            placeholder="Search"
            onChange={search}
          />
        </div>
        <div className="triangle" />
        <img src={searchIcon} alt="search icon" className="search-icon" />
      </div>
    </div>
  )
}

export default SearchBar
