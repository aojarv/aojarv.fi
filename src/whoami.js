import React from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Whoami = () => {
  return(
    <>
    <div className="left">
    <p><Link className="link" to="/">Home</Link></p>
    </div>
      <div className="right">
      <p><Link className="link" to="/projects">Projects</Link></p>
      <p><Link className="link" to="/faq">FAQ</Link></p>
      </div>
      <div className="whoami">
        <h1>Who am i?</h1>
      </div>
    </>
  )
}

export default Whoami