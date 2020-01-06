import React, { useEffect, useState } from 'react'
import './css/whoami.css'
import './css/colors.css'
import { Link as Linkki } from 'react-router-dom'
import ExpandMore from './ExpandMoreIcon'
import ExpandLess from './ExpandLessIcon'
import antti from './pictures/antti.png'

const Whoami = () => {

  const [luokka, setLuokka] = useState({})

  const text = "I am Antti Järveläinen, a 21-year-old university student from Turku, Finland."

    useEffect (() => {
        
        const array = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "bb", "cc", "dd", "ee", "ff" ]
        
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

    const Top = (props) => {
      return(
        <div className="top" id={props.id}>
          <div className="left">
            <div className={luokka.b}><Linkki className="link" to="/">Home</Linkki></div>
          </div>
          <div className="whoami">
            <div className={luokka.a}><h1>Who am i?</h1></div>
            <ExpandMore id="who"/>
          </div>
          <div className="right">
            <div className={luokka.c}><Linkki className="link" to="/projects">Projects</Linkki></div>
            <div className={luokka.d}><Linkki className="link" to="/faq">Faq</Linkki></div>
            <div className={luokka.e}><Linkki className="link" to="/contact">Contact</Linkki></div>
          </div>
        </div>
      )
    }

    const Bottom = (props) => {
      return(
        <>
          <div className="bottom" id={props.id}>
            <div className="antti">
              <div className={props.a}>{text}</div>
            </div>
            <div className="pic">
              <img className="pictureofantti" src={antti} alt="antti"></img>
            </div>
            <div className="center">
              <ExpandLess id="top"/>
            </div>
          </div>
        </>
      )
    }

  return(
    <>
      <Top id="top"/>
      <Bottom id="who" a={luokka.a}/>
    </>
  )
}

export default Whoami