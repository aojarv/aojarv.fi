import React, { useEffect, useState } from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Whoami = () => {

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
    <div className={luokka.b}><p><Link className="link" to="/">Home</Link></p></div>
    </div>
      <div className="right">
      <div className={luokka.c}><p><Link className="link" to="/projects">Projects</Link></p></div>
      <div className={luokka.d}><p><Link className="link" to="/faq">FAQ</Link></p></div>
      <div className={luokka.e}><p><Link className="link" to="/contact">Contact</Link></p></div>
      </div>
      <div className={luokka.a}>
      <p className="whoami"><h1>Who am i?</h1></p>
      </div>
    </>
  )
}

export default Whoami