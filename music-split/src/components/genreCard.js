import React from "react"
import Img from "gatsby-image"

const GenreCard = ({ backgroundImage, genre }) => {
  const activeFilter = e => {
    const cards = document.querySelectorAll(".event-card")
    const filter = e.currentTarget

    cards.forEach(card => {
      card
        .querySelector(".event-tags")
        .innerHTML.includes(filter.querySelector(".genre-label").innerHTML)
        ? (card.style.cssText = "display: flex;")
        : (card.style.cssText = "display: none;")
    })
  }

  return (
    <div className="genre-card" onClick={activeFilter}>
      <Img fluid={backgroundImage} />
      <img src={genre.genreSvg} className="genre-svg" alt="genre card" />
      <label className="genre-label">{genre.genreName}</label>
    </div>
  )
}

export default GenreCard
