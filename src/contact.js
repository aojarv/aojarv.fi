import React, { useEffect, useState } from 'react'
import './css/index.css'
import { Link as Linkki } from 'react-router-dom'
import { Link } from 'react-scroll'
import Github from './icons/GitHub-Mark-120px-plus.png'
import Linkedin from './icons/LI-In-Bug.png'
import ExpandMore from './ExpandMoreIcon.js';

const Contact = () => {

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




    const HowToContact = (props) => {
      return(
        <>
          <div className="howtocontact" id={props.id}>
            <a href="https://github.com/aojarv" target="_blank" rel="noopener noreferrer"><img className="zoom" src={Github}></img></a>
            <a href="https://www.linkedin.com/in/antti-j%C3%A4rvel%C3%A4inen-48339919a/" target="_blank" rel="noopener noreferrer"><img className="zoom" src={Linkedin}></img></a>
          </div>
        </>
      )
    }

  return(
    <>
      <div className="con">
        <div className="left">
          <p className={luokka.a}><Linkki className="link" to="/">Home</Linkki></p>
          <p className={luokka.b}><Linkki className="link" to="/whoami">Who am I</Linkki></p>
          <p className={luokka.c}><Linkki className="link" to="/projects">projects</Linkki></p>
          <p className={luokka.d}><Linkki className="link" to="/faq">Faq</Linkki></p>
        </div>
        <div className="contact">
          <h1 className={luokka.e}>Contact</h1>
          <ExpandMore id="c1"/>
        </div>
      </div>
      <HowToContact id="c1"/>
    </>
  )
}

export default Contact