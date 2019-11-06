import React from "react"
import { Link } from "gatsby"
import "../styles/navigation.css"

const Navigation = ({ menuItems }) => {
  return (
    <div className="nav-bar">
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

export default Navigation
