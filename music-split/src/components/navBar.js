import React from "react"
import { Link } from "gatsby"
import "../styles/navBar.css"
import HiddenLinks from "../components/hiddenLinks"

const storage = localStorage

const NavBar = ({ menuItems }) => {
  const signOut = e => {
    localStorage.removeItem("token")
    e.target.innerHTML = "Log in"
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
      {storage.getItem("token") ? (
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
