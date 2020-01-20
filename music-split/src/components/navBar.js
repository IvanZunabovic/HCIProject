import React from "react"
import { Link } from "gatsby"
import "../styles/navBar.css"
import HiddenLinks from "../components/hiddenLinks"

let storage = ""

if (typeof window !== "undefined") {
  storage = localStorage
}

const NavBar = ({ menuItems }) => {
  const signOut = e => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
      e.target.innerHTML = "Log in"
    }
  }

  return (
    <div className="nav-bar">
      {menuItems.map(({ path, text }) => {
        return (
          <Link to={path} key={path} className="page-link">
            {text}
          </Link>
        )
      })}
      {typeof window !== "undefined" && storage.getItem("token") ? (
        <Link
          to="/login"
          key="/signout"
          onClick={signOut}
          className="page-link"
        >
          Sign Out
        </Link>
      ) : (
        <Link to="/login" key="/login" className="page-link">
          Log in
        </Link>
      )}
      {false && <HiddenLinks menuItems={menuItems}></HiddenLinks>}
    </div>
  )
}

export default NavBar
