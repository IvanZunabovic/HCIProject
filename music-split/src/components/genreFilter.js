import React from "react"
import { useStaticQuery } from "gatsby"
import GenreCard from "../components/genreCard"
import bluesSvg from "../images/blues-genre.svg"
import classicSvg from "../images/classical-genre.svg"
import electronicSvg from "../images/electronic-genre.svg"
import hiphopSvg from "../images/hiphop-genre.svg"
import jazzSvg from "../images/jazz-genre.svg"
import metalSvg from "../images/metal-genre.svg"
import popSvg from "../images/pop-genre.svg"
import punkSvg from "../images/punk-genre.svg"
import rockSvg from "../images/rock-genre.svg"
import "../styles/events.css"

const genres = [
  { genreSvg: bluesSvg, genreName: "Blues" },
  { genreSvg: classicSvg, genreName: "Classical" },
  { genreSvg: electronicSvg, genreName: "Electronic" },
  { genreSvg: hiphopSvg, genreName: "HipHop" },
  { genreSvg: jazzSvg, genreName: "Jazz" },
  { genreSvg: metalSvg, genreName: "Metal" },
  { genreSvg: popSvg, genreName: "Pop" },
  { genreSvg: punkSvg, genreName: "Punk" },
  { genreSvg: rockSvg, genreName: "Rock" },
]

const GenreFilter = () => {
  const data = useStaticQuery(graphql`
    {
      genreBackgrounds: allFile(
        filter: { relativePath: { regex: "/background/" } }
      ) {
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
  `)
  return (
    <div className="genre-filter">
      {data.genreBackgrounds.edges.map((edge, index) => {
        return (
          <GenreCard
            key={edge.node.childImageSharp.fluid.src}
            backgroundImage={edge.node.childImageSharp.fluid}
            genre={genres[index]}
          />
        )
      })}
    </div>
  )
}

export default GenreFilter
