import React from "react"
import Img from "gatsby-image"

const GenreCard = ({ backgroundImage, genre }) => {
  return (
    <div className="genre-card">
      <Img fluid={backgroundImage} />
      <img src={genre.genreSvg} className="genre-svg" />
      <label className="genre-label">{genre.genreName}</label>
    </div>
  )
}

export default GenreCard
