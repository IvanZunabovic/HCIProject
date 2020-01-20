require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Music Split`,
    description: `Music shop site for all music shops in Split`,
    author: `@gatsbyjs`,
    menuItems: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Profile",
        path: "/profile",
      },
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
        text: "Store",
        path: "/store",
      },
    ],
    users: [
      {
        name: "Ivan",
        lastName: "Žunabović",
        email: "ivan.zunabovic1234@gmail.com",
        passwordSHA:
          "5d64e3e14b692ade369b9cc4f80dd84cadc9b93fed60611f31dffedf82fa2f2f",
      },
      {
        name: "Sandro",
        lastName: "Jažo",
        email: "sandro.jazo@gmail.com",
        passwordSHA:
          "6c9fbed6653e602ca49f72ca7925fcf264ddec4495a3ef2db9cb9c73e9f11000",
      },
      {
        name: "Jure",
        lastName: "Jurić",
        email: "jure.juric@gmail.com",
        passwordSHA:
          "cf0a4bab6cb2aa99465b288e9dbb498503133fb142651e524a3d2c3fad76c99d",
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
