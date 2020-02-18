import React from "react"
import { Link } from "gatsby"

const HiddenLinks = ({ menuItems }) => {
  const signOut = e => {
    console.log("Sign Out")
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      localStorage.removeItem("token")
      e.target.innerHTML = "Log in"
    }
  }

  return (
    <div className="hidden-links">
      {menuItems.map(({ path, text }) => {
        return text === "Login" &&
          typeof window !== "undefined" &&
          localStorage.getItem("token") ? (
          <Link
            to={"/login"}
            key={path}
            className="page-link"
            onClick={signOut}
          >
            Sign Out
          </Link>
        ) : text === "Profile" &&
          typeof window !== "undefined" &&
          !localStorage.getItem("token") ? (
          ""
        ) : (
          <Link to={path} key={path} className="page-link">
            {text}
          </Link>
        )
      })}
    </div>
  )
}

export default HiddenLinks
