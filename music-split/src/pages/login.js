import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import InputFields from "../components/inputFields"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "../styles/login.css"

const Login = ({ data }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { fluid } = data.backgroundImage.childImageSharp
  const { users } = data.usersMetadata.siteMetadata

  const valdiateForm = () => {
    return email.length > 0 && password.length > 0
  }

  const handleLogin = event => {
    event.preventDefault()
    alert("Loged in")
  }

  const onEmailFieldChanged = e => {
    setEmail(e.target.value)
  }

  const onPasswordFieldChanged = e => {
    setPassword(e.target.value)
  }

  return (
    <Layout className="layout">
      <div className="login-form">
        <InputFields
          emailChanged={onEmailFieldChanged}
          passwordChanged={onPasswordFieldChanged}
        >
          <button
            className="button"
            onClick={handleLogin}
            disabled={!valdiateForm()}
          >
            Sign in
          </button>
          <label className="or-label">or</label>
          <div className="google-button">
            <Img fluid={fluid} className="google-logo" />
            <label className="google-sign-in-text">Sign in with Google</label>
          </div>

          <label className="new-account-label">
            Don't have account?{" "}
            <a href="/login/" className="register-label">
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
    usersMetadata: site {
      siteMetadata {
        users {
          email
          passwordSHA
        }
      }
    }
  }
`
