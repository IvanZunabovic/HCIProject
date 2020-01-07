import React from "react"
import { Link } from "gatsby"

const HiddenLinks = ({ menuItems }) => {
  return (
    <div className="hidden-links">
      {menuItems.map(({ path, text }) => {
        return (
          <Link to={path} key={path} className="page-link">
            {text}
          </Link>
        )
      })}
    </div>
  )
}

export default HiddenLinks
