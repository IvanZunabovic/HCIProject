import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import "../styles/navBar.css"
import HiddenLinks from "../components/hiddenLinks"
import { useResponsiveMenu } from "../hooks/responsive-menu"
import svg from "../images/more.svg"
import cartImage from "../images/cart-icon.png"

const NavBar = ({ menuItems }) => {
  const containerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const { menu } = useResponsiveMenu({ containerRef, menuItems })

  const signOut = e => {
    console.log("Sign Out")
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      localStorage.removeItem("token")
      e.target.innerHTML = "Log in"
    }
  }

  useEffect(() => {
    const navLinks = document.querySelectorAll(".page-link")
    navLinks.forEach(link => {
      link.innerHTML === "Profile" &&
      window !== "undefined" &&
      !localStorage.getItem("token")
        ? link.classList.add("hidden")
        : link.classList.add("visible")
    })
  }, [])

  const handleMenu = () => setOpen(!open)

  return (
    <div className="links-container">
      <div ref={containerRef} className="nav-bar">
        {menu.visibleItems.map(({ path, text }) => {
          return text !== "Cart" ? (
            text === "Login" &&
            window !== "undefined" &&
            localStorage.getItem("token") ? (
              <Link
                to={path}
                key={path}
                className="page-link"
                onClick={signOut}
              >
                Sign Out
              </Link>
            ) : (
              <Link to={path} key={path} className="page-link">
                {text}
              </Link>
            )
          ) : (
            <Link to={path} key={text} className="page-link">
              <img src={cartImage} alt="cart img" className="cart-image" />
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
