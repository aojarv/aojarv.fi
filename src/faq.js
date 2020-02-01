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

  // A method for scrolling to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  // Always when the component renders, a random color palette of 5 colors from colors.css is chosen
  useEffect (() => {
        
    const array = [ "a", "d", "e", "f", "g", "m", "n", "o", "q", "s", "x", "aa", "bb", "dd"]
        
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

  //Component for "top", the links to other components and a header are rendered here
  const Top = () => {
    return(
      <div className="top">
        <div className="left">
          <div className={luokka.a}><Link className="link" to="/">Home</Link></div>
          <div className={luokka.b}><Link className="link" to="/whoami">Who am I</Link></div>
          <div className={luokka.c}><Link className="link" to="/projects">Projects</Link></div>
        </div>
        <div className="faq">
          <h1 className={luokka.d}>FAQ</h1>
          <ExpandMore id="mid"/>
        </div>
        <div className="right">
          <div className={luokka.e}><Link className="link" to="/contact">Contact</Link></div>
        </div>
      </div>
    )
  }
  
  // Component for a question and an answer
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

  //Component for the first component of 3 questions and answers. 
  const Mid = (props) => {
    return(
      <div className="qna" id={props.id}>
        <div className="cont1">
          <Qna color={props.c1} q="Hobbies?" a="Videogames, road cycling, downhill skiing and many others!"/>
          <Qna color={props.c2} q="Which coding languages do you know?" a="Python (good), Java (good), React (great), TypeScript (basics), NodeJS (good), CSS (good). At the moment focus is on web development languages."/>
          <Qna color={props.c3} q="Favourite colour?" a="Black."/>
        </div>
        <div className="cont2">
          <div className="center"><ExpandLess id="top"/><ExpandMore id="bot"/></div>
        </div>
      </div>
    )
  }
  
//Component for the second component of 3 questions and answers. 
  const Bottom = (props) => {
    return(
      <div className="qna" id={props.id}>
        <div className="cont1">
          <Qna color={props.c3} q="Which languages do you know?" a="Finnish, English, Swedish, German"/>
          <Qna color={props.c4} q="What do you study?" a="Computer science at University of Turku"/>
          <Qna color={props.c5} q="Interests?" a="Investing (in shares and ETFs) is the biggest one at the moment"/>
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
      <Bottom id="bot" c1={luokka.a} c2={luokka.b} c3={luokka.c} c4={luokka.d} c5={luokka.e} />
    </>
  )
}

export default Faq