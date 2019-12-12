import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import './index.css'
import Whoami from './whoami.js'
import Projects from './projects.js'
import Education from './education.js'
import Home from './home.js'

const Routes = () => {
  return(
    <>
      <div>
      <Router>
        <div>
          <div>
          </div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/whoami" render={() => <Whoami />} />
          <Route path="/education" render={() => <Education />} />
          <Route path="/projects" render={() => <Projects />} />
        </div>
      </Router>
    </div>
    </>
  )
}

export default Routes


/**
 * 
 *  <Link className="link" to="/">Home</Link>
    <Link className="link" to="/whoami">Who am i</Link>
    <Link className="link" to="/education">Education</Link>
    <Link className="link" to="/projects">Projects</Link>
 * 
 */