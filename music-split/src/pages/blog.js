import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "../styles/blog.css"
import Footer from "../components/footer"

const ReviewCover = ({ imageFluid }) => {
  const onWriteCommentButtonClicked = () => {
    window.scrollTo(0, document.body.scrollHeight)
    document.querySelector(".input").focus()
  }

  return (
    <div className="review-cover-container">
      <div className="review-image-container">
        <Img fluid={imageFluid} />
      </div>
      <div className="review-cover-description">
        <label className="review-cover-title">Content Challenge:</label>
        <label className="review-cover-subtitle">Review section</label>
        <p className="review-description">
          This is place where you can tell us what you liked and especially what
          you didn't like about our service
        </p>
        <button
          className="comment-button"
          onClick={onWriteCommentButtonClicked}
        >
          Write your comment
        </button>
      </div>
      <div className="review-cover-background" />
    </div>
  )
}

const ReviewCard = ({ user }) => {
  return (
    <div className="review-class">
      <div className="user-info-and-grade-container">
        <label className="user-info-label">{user.userName}</label>
        {user.userStars.map((star, index) => {
          return (
            <img
              src={star}
              key={index}
              alt="review star"
              className="review-star"
            />
          )
        })}
      </div>
      <p className="user-review">{user.userReview}</p>
    </div>
  )
}

const ReviewInput = () => {
  return (
    <div className="input-container">
      <textarea placeholder="Review" className="input" />
      <div>
        <button className="comment-button">Confirm</button>
        <button className="comment-button">Cancel</button>
      </div>
    </div>
  )
}

const Blog = ({ data }) => {
  const { fluid } = data.reviewCover.childImageSharp
  const { userReviews } = data.userReviewsArr.siteMetadata

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("token")) {
      document.querySelector(".input-container").classList.add("hidden")
    }
  }, [])

  return (
    <Layout>
      <div className="blog-review-cover-component">
        <ReviewCover imageFluid={fluid} />
      </div>
      <div className="reviews-container">
        {userReviews.map(userReview => {
          return <ReviewCard user={userReview} key={userReview.userName} />
        })}
        <ReviewInput />
      </div>
      <Footer />
    </Layout>
  )
}

export default Blog
export const query = graphql`
  {
    reviewCover: file(relativePath: { eq: "review.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    userReviewsArr: site {
      siteMetadata {
        userReviews {
          userName
          userReview
          userStars
        }
      }
    }
  }
`
