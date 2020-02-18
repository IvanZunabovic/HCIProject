import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import InputFields from "../components/inputFields"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "../styles/login.css"
import sha256 from "crypto-js/sha256"

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

    const currentUser = users.filter(user => {
      return user.email === email ? user : null
    })

    console.log(sha256(password).toString())

    if (
      currentUser.length &&
      currentUser[0].passwordSHA.localeCompare(sha256(password).toString())
    ) {
      const pageLinks = document.querySelectorAll(".page-link")
      pageLinks[pageLinks.length - 2].innerHTML = "Sign out"

      localStorage.setItem("token", JSON.stringify(currentUser[0]))
      window.location.replace("/")
    } else {
      alert("Wrong email or password")
    }
  }

  const onEmailFieldChanged = newEmailValue => {
    setEmail(newEmailValue)
  }

  const onPasswordFieldChanged = newPasswordValue => {
    setPassword(newPasswordValue)
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
            id="sign-in-button"
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
          name
          lastName
          email
          passwordSHA
        }
      }
    }
  }
`
