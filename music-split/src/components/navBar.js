import React from "react"
import { Link } from "gatsby"
import "../styles/navBar.css"
import HiddenLinks from "../components/hiddenLinks"

const NavBar = ({ menuItems }) => {
  return (
    <div className="nav-bar">
      {menuItems.map(({ path, text }) => {
        return (
          <Link to={path} key={path} className="page-link">
            {text}
          </Link>
        )
      })}

      {false && <HiddenLinks menuItems={menuItems}></HiddenLinks>}
    </div>
  )
}

export default NavBar
