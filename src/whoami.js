import React, { useEffect, useState } from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const Whoami = () => {

  const [luokka, setLuokka] = useState({})

  useEffect (() => {
    const arr = [
        {
            a: "a1",
            b: "a2",
            c: "a3",
            d: "a4",
            e: "a5"
        },
        {
            a: "b1",
            b: "b2",
            c: "b3",
            d: "b4",
            e: "b5"
        },
        {
            a: "c1",
            b: "c2",
            c: "c3",
            d: "c4",
            e: "c5"
        },
        {
            a: "d1",
            b: "d2",
            c: "d3",
            d: "d4",
            e: "d5"
        }
        ]
    const lol = Math.floor(Math.random() * arr.length)
    setLuokka(arr[lol])
}, [])

  return(
    <>
    <div className="left">
    <div className={luokka.b}><p><Link className="link" to="/">Home</Link></p></div>
    </div>
      <div className="right">
      <div className={luokka.c}><p><Link className="link" to="/projects">Projects</Link></p></div>
      <div className={luokka.d}><p><Link className="link" to="/faq">FAQ</Link></p></div>
      <div className={luokka.e}><p><Link className="link" to="/contact">contact</Link></p></div>
      </div>
      <div className={luokka.a}>
      <p className="whoami"><h1>Who am i?</h1></p>
      </div>
    </>
  )
}

export default Whoami