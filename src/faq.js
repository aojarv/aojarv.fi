import React from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Education = () => {
  return(
    <>
    <div className="left">
      <p><Link className="link" to="/">Home</Link></p>
      <p><Link className="link" to="/whoami">whoami</Link></p>
      <p><Link className="link" to="/projects">projects</Link></p>
    </div>
      <div className="projects">
        <h1>FAQ</h1>
      </div>
    </>
  )
}

export default Education