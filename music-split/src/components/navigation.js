import React from "react"
import { Link } from "gatsby"
import "../styles/navigation.css"

const Navigation = ({ menuItems }) => {
  return (
    <div className="nav-bar">
      {menuItems.map(({ path, text }) => {
        return (
          <button className="page-link" key={path}>
            <Link to={path}>{text}</Link>
          </button>
        )
      })}
    </div>
  )
}

export default Navigation
