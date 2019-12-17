import React, { useState, useEffect } from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Route, Link as Linkki, Redirect, withRouter
} from 'react-router-dom'
import { Link } from "react-scroll";

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

    const Project = (props) => {
      return(
        <>
          <div className="project" id={props.id}>

          </div>
        </>
      )
    }

  return(
    <>
      <div className="projekti">
        <div className="left">
          <p className={luokka.a}><Linkki className="link" to="/">Home</Linkki></p>
          <p className={luokka.b}><Linkki className="link" to="/whoami">Who am I</Linkki></p>
        </div>
        <div className="right">
          <p className={luokka.c}><Linkki className="link" to="/faq">FAQ</Linkki></p>
          <p className={luokka.d}><Linkki className="link" to="/contact">Contact</Linkki></p>
        </div>
        <div className="projects">
          <h1 className={luokka.e}>Projects</h1>
        </div>
        <Link 
        className="linkki"
        activeClass="active"
        to="p1"
        spy={false}
        smooth={true}
        offset={0}
        duration={500}
        >
          <img src="https://img.youtube.com/vi/NNIpdyN2pQo/mqdefault_live.jpg"></img>
        </Link>
      </div>
      <Project id="p1"/>
      
    </>
  )
}

export default Projects