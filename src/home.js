import React from 'react'
import './index.css'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <div className="xd">
                <div className="home">
                    <h1>ANTTI JÄRVELÄINEN</h1>
                </div>
                <div className="home">
                    <Link className="link" to="/whoami">Who am i</Link>
                    <Link className="link" to="/projects">Projects</Link>
                    <Link className="link" to="/faq">FAQ</Link>
                </div>
            </div>
        </>
    )
}

export default Home