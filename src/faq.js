import React, { useEffect, useState } from 'react'
import './css/index.css'
import './css/faq.css'
import { Link } from 'react-router-dom'
import ExpandMore from './ExpandMoreIcon';

const Faq = () => {

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


    const Answersandquestions = (props) => {
      return(
        <div className="container" id={props.id}>
          <h1>töihin</h1>
        </div>
      )
    }


  return(
    <>
      <div className="top">
        <div className="left">
          <p className={luokka.a}><Link className="link" to="/">Home</Link></p>
          <p className={luokka.b}><Link className="link" to="/whoami">Who am I</Link></p>
          <p className={luokka.c}><Link className="link" to="/projects">projects</Link></p>
        </div>
        <div className="faq">
          <h1 className={luokka.e}>FAQ</h1>
          <ExpandMore id="faq1"/>
        </div>
        <div className="right">
          <p className={luokka.d}><Link className="link" to="/contact">Contact</Link></p>
        </div>
      </div>
      <Answersandquestions id="faq1"/>
    </>
  )
}

export default Faq