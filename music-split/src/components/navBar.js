import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import "../styles/navBar.css"
import HiddenLinks from "../components/hiddenLinks"
import { useResponsiveMenu } from "../hooks/responsive-menu"
import svg from "../images/more.svg"

const NavBar = ({ menuItems }) => {
  const containerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const { menu } = useResponsiveMenu({ containerRef, menuItems })

  const signOut = e => {
    console.log("Sign out")
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
      e.target.innerHTML = "Log in"
    }
  }

  const handleMenu = () => setOpen(!open)

  return (
    <div className="links-container">
      <div ref={containerRef} className="nav-bar">
        {menu.visibleItems.map(({ path, text }) => {
          return (
            <Link to={path} key={path} className="page-link">
              {text}
            </Link>
          )
        })}
      </div>
      {menu.areLinksHidden && (
        <img
          src={svg}
          alt="more-icon"
          className="more-icon"
          onClick={handleMenu}
        />
      )}
      {open && <HiddenLinks menuItems={menu.hiddenItems}></HiddenLinks>}
    </div>
  )
}

export default NavBar
