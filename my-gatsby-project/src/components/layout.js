import React, { Children } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Navigation from "./navigation"

const Layout = ({children}) => {
    console.log(children)
    const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          menuItems {
            path
            text
          }
        }
      }
    }
  `)

  return(
  <div>
      <Navigation menuItems={data.site.SiteMetadata.menuItems}/>
      {children}
  </div>
)}
  
export default Layout