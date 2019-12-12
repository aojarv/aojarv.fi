import React from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Projects = () => {
  return(
    <>
      <div className="left">
    <p><Link className="link" to="/">Home</Link></p>
      <p><Link className="link" to="/whoami">whoami</Link></p>
    </div>
    <div className="right">
      <p><Link className="link" to="/faq">FAQ</Link></p>
      </div>
      <div className="education">
        <h1>Projects</h1>
      </div>
    </>
  )
}

export default Projects