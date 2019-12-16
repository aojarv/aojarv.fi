import React from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Contact = () => {
  return(
    <>
    <div className="left">
      <p><Link className="link" to="/">Home</Link></p>
      <p><Link className="link" to="/whoami">whoami</Link></p>
      <p><Link className="link" to="/projects">projects</Link></p>
      <p><Link className="link" to="/faq">FAQ</Link></p>
    </div>
      <div className="contact">
        <h1>Contact</h1>
      </div>
    </>
  )
}

export default Contact