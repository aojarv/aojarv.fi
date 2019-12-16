import React, { useState, useEffect } from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Projects = () => {

  const [luokka, setLuokka] = useState({})

    useEffect (() => {
        
        const array = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "bb" ]
        
        const lol = Math.floor(Math.random() * array.length)

        let object = {
            a: array[lol]+"1",
            b: array[lol]+"2",
            c: array[lol]+"3",
            d: array[lol]+"4",
            e: array[lol]+"5"
        }
        setLuokka(object)
    }, [])

  return(
    <>
      <div className="left">
        <p className={luokka.a}><Link className="link" to="/">Home</Link></p>
        <p className={luokka.b}><Link className="link" to="/whoami">whoami</Link></p>
      </div>
      <div className="right">
        <p className={luokka.c}><Link className="link" to="/faq">FAQ</Link></p>
        <p className={luokka.d}><Link className="link" to="/contact">contact</Link></p>
      </div>
      <div className="projects">
        <h1 className={luokka.e}>Projects</h1>
      </div>
    </>
  )
}

export default Projects