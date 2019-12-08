import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import './index.css'
import Mainpage from './mainpage.js'
import Projects from './projects.js'
import Education from './education.js'

const Routee = () => {
  return(
    <>
      <div>
      <Router>
        <div>
          <div>
            <Link to="/">main</Link>
            <Link to="/education">Education</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <Route path="/" render={() => <Mainpage />} />
          <Route exact path="/education" render={() => <Education />} />
          <Route path="/projects" render={() => <Projects />} />
        </div>
      </Router>
    </div>
    </>
  )
}

export default Routee