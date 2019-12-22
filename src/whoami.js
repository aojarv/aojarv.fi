import React, { useEffect, useState } from 'react'
import './css/whoami.css'
import { Link as Linkki } from 'react-router-dom'
import ExpandMore from './ExpandMoreIcon'
import ExpandLess from './ExpandLessIcon'
import antti from './pictures/antti.png'

const Whoami = () => {

  const [luokka, setLuokka] = useState({})

  const text = "I am Antti Järveläinen, a 20-year-old university student from Turku, Finland. I'm studying computer science for 2nd year now and I'm looking to graduate in 2024"

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



    const Antti = (props) => {
      return(
        <>
          <div className="bottom" id={props.id}>
            <div className="antti">
              <div className={props.a}>{text}</div>
            </div>
            <div className="anttipic">
              <img className="anttipicc" src={antti} alt="antti"></img>
            </div>
            <div className="center">
              <ExpandLess id="top"/>
            </div>
          </div>
        </>
      )
    }

    const Top = (props) => {
      return(
        <div className="top" id={props.id}>
          <div className="left">
            <p className={luokka.b}><Linkki className="link" to="/">Home</Linkki></p>
          </div>
          <div className="whoami">
            <p className={luokka.a}><h1>Who am i?</h1></p>
            <ExpandMore id="who"/>
          </div>
          <div className="right">
            <p className={luokka.c}><Linkki className="link" to="/projects">Projects</Linkki></p>
            <p className={luokka.d}><Linkki className="link" to="/faq">Faq</Linkki></p>
            <p className={luokka.e}><Linkki className="link" to="/contact">Contact</Linkki></p>
          </div>
        </div>
      )
    }

  return(
    <>
      <Top id="top"/>
      <Antti id="who" a={luokka.a}/>
    </>
  )
}

export default Whoami