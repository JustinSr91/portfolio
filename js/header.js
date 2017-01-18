import React from "react"
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (
      <header className="header">
        <h1 className="headerText"> Portfolio </h1>
          <nav>
            <Link to="/projects" className="navLink"> View Projects </Link>
            <Link to="/" className="navLink"> Home </Link>
            <Link to="/blog" className="navLink"> Blog </Link>
          </nav>
      </header>
    )
  }
})
