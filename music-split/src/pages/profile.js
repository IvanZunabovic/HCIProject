import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import UserData from "../components/userData"
import ProfileTerms from "../components/profileTerms"
import AccountInfoSettings from "../components/accountInfoSettings"
import "../styles/profile.css"

const Profile = ({ data }) => {
  const { fluid } = data.profilePhotos.childImageSharp

  return (
    <Layout>
      <UserData fluid={fluid} />
      <ProfileTerms />
      <AccountInfoSettings />
    </Layout>
  )
}

export default Profile
export const query = graphql`
  {
    profilePhotos: file(relativePath: { regex: "/profile-photo/" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
