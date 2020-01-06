import React, { useEffect, useState } from 'react'
import './css/index.css'
import './css/faq.css'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import ExpandMore from './ExpandMoreIcon'
import ExpandLess from './ExpandLessIcon'
import Totop from './icons/totop.png'

const Faq = () => {

  const [luokka, setLuokka] = useState({})

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

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

  const Top = () => {
    return(
      <div className="top">
        <div className="left">
          <div className={luokka.a}><Link className="link" to="/">Home</Link></div>
          <div className={luokka.b}><Link className="link" to="/whoami">Who am I</Link></div>
          <div className={luokka.c}><Link className="link" to="/projects">Projects</Link></div>
        </div>
        <div className="faq">
          <h1 className={luokka.e}>FAQ</h1>
          <ExpandMore id="mid"/>
        </div>
        <div className="right">
          <div className={luokka.d}><Link className="link" to="/contact">Contact</Link></div>
        </div>
      </div>
    )
  }
    
  const Qna = (props) => {
    return(
      <div className={props.color}>
        <div className="aandq">
          <div className="question">
            Q: {props.q}
          </div>
          <div className="answer">
            A: {props.a}
          </div>
        </div>
      </div>
    )
  }

  const Mid = (props) => {
    return(
      <div className="qna" id={props.id}>
        <div className="cont1">
          <Qna color={props.c1} q="Hobbies?" a="Videogames, road cycling, downhill skiing and many others!"/>
          <Qna color={props.c5} q="Which coding languages do you know?" a="Python (good), Java (good), React (pretty good), NodeJS (good), CSS (good). At the moment focus is on web development languages."/>
          <Qna color={props.c2} q="Favourite colour?" a="Black."/>
        </div>
        <div className="cont2">
          <div className="center"><ExpandLess id="top"/><ExpandMore id="bot"/></div>
        </div>
      </div>
    )
  }

  const Bottom = (props) => {
    return(
      <div className="qna" id={props.id}>
        <div className="cont1">
          <Qna color={props.c3} q="Which languages do you know?" a="Finnish, English, Swedish, German"/>
          <Qna color={props.c4} q="Conscription?" a="Looking to get into Air Forces' pilot training (flight reserve officer course, lentoRUK) in summer 2021 after having completed my Bachelor's degree. Not sure yet tho."/>
          <Qna color={props.c1} q="Interests?" a="Investing (in shares and ETFs) is the biggest one at the moment"/>
        </div>
        <div className="cont2">
          <div className="center"><ExpandLess id="mid"/><a href onClick={scrollToTop}><img className="totop" src={Totop} alt=""></img></a></div>
        </div>
      </div>
    )
  }

  return(
    <>
      <Top id="top"/>
      <Mid id="mid" c1={luokka.a} c2={luokka.b} c3={luokka.c} c4={luokka.d} c5={luokka.e} />
      <Bottom id="bot" c1={luokka.d} c2={luokka.a} c3={luokka.e} c4={luokka.b} c5={luokka.c} />
    </>
  )
}

export default Faq