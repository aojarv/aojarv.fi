import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routee from './router.js'

const App = () => {
  return(
    <>
      <Routee/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)