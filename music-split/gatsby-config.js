require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Music Split`,
    description: `Music shop site for all music shops in Split`,
    author: `@gatsbyjs`,
    menuItems: [
      {
        text: "Blog",
        path: "/blog",
      },
      {
        text: "Courses",
        path: "/courses",
      },
      {
        text: "Events",
        path: "/events",
      },
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Profile",
        path: "/profile",
      },
      {
        text: "Store",
        path: "/store",
      },
      {
        text: "Log in",
        path: "/login",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
