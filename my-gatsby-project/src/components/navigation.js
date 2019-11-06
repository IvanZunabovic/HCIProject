import React from "react"
import { Link } from "gatsby"

const Navigation = ({menuItems}) => {
  console.log("Test");
  
    return(
    <ul>
      {
        menuItems.map(({path, text}) => {
          return (
            <Link to={path}>{text}</Link>
          )
        })
      }
    </ul>
)}
  
  export default Navigation
  