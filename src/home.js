import React, { useEffect, useState } from 'react'
import './home.css'
import './colors.css'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'
  

const Home = () => {

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
            <div className="koti">
                <div className={luokka.a}>
                    <h1>ANTTI JÄRVELÄINEN</h1>
                </div>
                <div>
                    <div className={luokka.b}><Link className="link" to="/whoami">Who am I</Link></div>
                    <div className={luokka.c}><Link className="link" to="/projects">Projects</Link></div>
                    <div className={luokka.d}><Link className="link" to="/faq">FAQ</Link></div>
                    <div className={luokka.e}><Link className="link" to="/contact">Contact</Link></div>
                </div>
            </div>
        </>
    )
}

export default Home