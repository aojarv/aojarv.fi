import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './home.js'
import Whoami from './whoami.js'
import Projects from './projects.js'
import Faq from './faq.js'
import Contact from './contact.js'

const Routes = () => {
  return(
    <>
      <div>
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/whoami" render={() => <Whoami />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/faq" render={() => <Faq />} />
          <Route path="/contact" render={() => <Contact />} />
        </div>
      </Router>
    </div>
    </>
  )
}

export default Routes