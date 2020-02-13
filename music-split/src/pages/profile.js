import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import UserData from "../components/userData"
import ProfileTerms from "../components/profileTerms"
import AccountInfoSettings from "../components/accountInfoSettings"
import Footer from "../components/footer"
import "../styles/profile.css"
import settingsSVG from "../images/profile-settings.svg"

const Profile = ({ data }) => {
  const { fluid } = data.profilePhotos.childImageSharp
  const [currentUser, setCurrentUser] = useState({
    name: "",
    lastName: "",
    email: "",
  })

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      setCurrentUser(JSON.parse(token))
    }
  }, [])

  return (
    <Layout>
      <UserData fluid={fluid} user={currentUser} />
      <ProfileTerms>
        <img
          src={settingsSVG}
          className="profile-settings-img"
          alt="profile img"
        />
      </ProfileTerms>
      <AccountInfoSettings user={currentUser} />
      <Footer />
    </Layout>
  )
}

export default Profile
export const query = graphql`
  {
    profilePhotos: file(relativePath: { eq: "profile-avatar.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
