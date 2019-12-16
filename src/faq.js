import React from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Faq = () => {
  return(
    <>
      <div className="left">
        <p><Link className="link" to="/">Home</Link></p>
        <p><Link className="link" to="/whoami">whoami</Link></p>
        <p><Link className="link" to="/projects">projects</Link></p>
      </div>
      <div className="right">
        <p><Link className="link" to="/contact">Contact</Link></p>
      </div>
      <div className="faq">
        <h1>FAQ</h1>
      </div>
    </>
  )
}

export default Faq