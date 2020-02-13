import React from "react"
import Layout from "../components/layout"

class Blog extends React.Component {
  state = { width: 0, height: 0 }
  render() {
    return (
      <span>
        Window size: {this.state.width} x {this.state.height}
      </span>
    )
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }
}

export default Blog
