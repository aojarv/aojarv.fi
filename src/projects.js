import React, { useState, useEffect } from 'react'
import './css/index.css'
import { Link as Linkki } from 'react-router-dom'
import { Link } from "react-scroll";
import ExpandMore from './ExpandMoreIcon';

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
          <p className={luokka.c}><Linkki className="link" to="/faq">Faq</Linkki></p>
          <p className={luokka.d}><Linkki className="link" to="/contact">Contact</Linkki></p>
        </div>
        <div className="projects">
          <h1 className={luokka.e}>Projects</h1>
          <ExpandMore id="p1"/>
        </div>
      </div>
      <Project id="p1"/>
    </>
  )
}

export default Projects