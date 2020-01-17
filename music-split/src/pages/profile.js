import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/profile.css"
import UserInfo from "../components/userInfo"
import AuthProvider from "../components/authProvider"

const Profile = ({ data }) => {
  const { fluid } = data.profilePhotos.childImageSharp

  return (
    <Layout>
      <AuthProvider>
        <div className="user-data">
          <Img fluid={fluid} className="profile-photo" />
          <div className="information-overview">
            <label className="user-name">Ivan Žunabović</label>
            <label className="user-email">ivan.zunabovic1234@gmail.com</label>
          </div>
        </div>
        <div className="profile-settings-title">
          <label className="manage-information-title">
            Manage your personal information
          </label>
          <label className="terms-and-service-label">
            Control which information people see and Power-Ups may access. To
            learn more, view our Terms of Service or Privacy Policy.
          </label>
        </div>
        <div className="info-settings">
          <div className="personal-info">
            <label className="details-type-label">Personal Info</label>
            <UserInfo
              userInfoDescription="Full Name"
              userInfo="Ivan Žunabović"
            />
            <UserInfo userInfoDescription="Initials" userInfo="IŽ" />
            <UserInfo
              userInfoDescription="User Name"
              userInfo="@ivanzunabovic"
            />
            <UserInfo
              userInfoDescription="Address"
              userInfo="Put Salduna I 63, Trogir"
            />
          </div>
          <div className="personal-info">
            <label className="details-type-label">Payments</label>
          </div>
          <div className="personal-info">
            <label className="details-type-label">Payments</label>
          </div>
        </div>
      </AuthProvider>
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
