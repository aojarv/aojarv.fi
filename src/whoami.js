import React, { useEffect, useState } from 'react'
import './css/index.css'
import './css/whoami.css'
import { Link as Linkki } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import ExpandMore from './ExpandMoreIcon';
import Totop from './icons/totop.png'
import ExpandLess from './ExpandLessIcon'

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



    const Antti = (props) => {
      return(
        <>
          <div className="container" id={props.id}>
            <div>
              <h1>työttömyys</h1>
            </div>
            <a onClick={scrollToTop}><img className="totop" src={Totop}></img></a>
            <ExpandLess id="top"/>
          </div>
        </>
      )
    }

    const Top = (props) => {
      return(
        <div className="whoisantti" id={props.id}>
          <div className="left">
            <p className={luokka.b}><Linkki className="link" to="/">Home</Linkki></p>
          </div>
          <div className="whoami">
            <p className={luokka.a}><h1>Who am i?</h1></p>
            <ExpandMore id="who1"/>
          </div>
          <div className="right">
            <p className={luokka.c}><Linkki className="link" to="/projects">Projects</Linkki></p>
            <p className={luokka.d}><Linkki className="link" to="/faq">Faq</Linkki></p>
            <p className={luokka.e}><Linkki className="link" to="/contact">Contact</Linkki></p>
          </div>
        </div>
      )
    }

    const scrollToTop = () => {
      scroll.scrollToTop();
    }

  return(
    <>
      <Top id="top"/>
      <Antti id="who1"/>
    </>
  )
}

export default Whoami