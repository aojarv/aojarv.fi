import React, { useEffect, useState } from 'react'
import './index.css'
import './colors.css'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

const Home = () => {

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
            <div className="xd">
                <div className={luokka.a}>
                    <h1>ANTTI JÄRVELÄINEN</h1>
                </div>
                <div>
                    <div className={luokka.b}><Link className="link" to="/whoami">Who am i</Link></div>
                    <div className={luokka.c}><Link className="link" to="/projects">Projects</Link></div>
                    <div className={luokka.d}><Link className="link" to="/faq">FAQ</Link></div>
                    <div className={luokka.e}><Link className="link" to="/contact">contact</Link></div>
                </div>
            </div>
        </>
    )
}

export default Home