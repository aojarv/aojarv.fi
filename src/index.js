import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './router.js'

const App = () => {
  return(
    <>
      <Router/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)