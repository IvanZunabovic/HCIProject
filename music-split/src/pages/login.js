import React from "react"
import Layout from "../components/layout"
import InputFields from "../components/inputFields"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "../styles/login.css"

const Login = ({ data }) => {
  const { fluid } = data.backgroundImage.childImageSharp
  return (
    <Layout className="layout">
      <div className="login-form">
        <InputFields>
          <button className="button">Sign in</button>
          <label className="or-label">or</label>
          <div className="google-button">
            <Img fluid={fluid} className="google-logo" />
            <label className="google-sign-in-text">Sign in with Google</label>
          </div>

          <label className="new-account-label">
            Don't have account?{" "}
            <a href="../register" className="register-label">
              REGISTER
            </a>
          </label>
        </InputFields>
      </div>
      <Footer className="footer" />
    </Layout>
  )
}

export default Login

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "google-sign-logo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
