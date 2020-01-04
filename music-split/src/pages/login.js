import React from "react"
import Layout from "../components/layout"
import InputFields from "../components/inputFields"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "../styles/login.css"
import GoogleButton from "react-google-button"
import FacebookLogin from "react-facebook-login"

const Login = ({ data }) => {
  const { fluid } = data.backgroundImage.childImageSharp
  return (
    <Layout className="layout">
      <div className="login-form">
        <InputFields>
          <button className="button">Confirm</button>
          <label className="or-label">or</label>
          <GoogleButton
            type="light"
            className="google-button"
            style={{ width: "-webkit-fill-available", border: "none" }}
          />
          <FacebookLogin
            className="facebook-button"
            style={{ width: "-webkit-fill-available", border: "none" }}
          />
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
    backgroundImage: file(relativePath: { eq: "login-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
