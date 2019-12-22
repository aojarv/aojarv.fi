import React, { useState, useEffect } from 'react'
import './css/projects.css'
import { Link as Linkki } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";
import ExpandMore from './ExpandMoreIcon';
import newsfeedapp from './pictures/newsfeedapp.png'
import currencyconverter from './pictures/currencyconverter.png'
import weatherapp from './pictures/weatherapp.png'
import portfolio from './pictures/portfolio.png'
import ExpandLess from './ExpandLessIcon';
import Totop from './icons/totop.png'

const Projects = () => {

  const [luokka, setLuokka] = useState({})

  const newsfeedapptext = "A news feed app that I created by using React and NodeJS. Currently runs in AWS. Fetches data from The New York Times' API and displays 20 newest articles, articles from 26 different sections and most shared and viewed articles of The NY Times."

  const portfoliotext = "I created this portfolio site to introduce me and my projects. Created by using React. Runs on Google Firebase. I focused on design and to create well structured code."

  const CCandWAtext = "Weatherapp and currency converter that I created just to learn to use APIs. Scrappy design and poor structure in codes. No backend. "

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



    const scrollToTop = () => {
      scroll.scrollToTop();
    }



    const Top = () => {
      return(
        <div className="top">
          <div className="left">
            <p className={luokka.a}><Linkki className="link" to="/">Home</Linkki></p>
            <p className={luokka.b}><Linkki className="link" to="/whoami">Who am I</Linkki></p>
          </div>
          <div className="projects">
            <h1 className={luokka.e}>Projects</h1>
            <ExpandMore id="p1"/>
          </div>
          <div className="right">
            <p className={luokka.c}><Linkki className="link" to="/faq">Faq</Linkki></p>
            <p className={luokka.d}><Linkki className="link" to="/contact">Contact</Linkki></p>
          </div>
        </div>
      )
    }



  const Project = (props) => {
    return(
      <>
          <div className={props.class} id={props.id}>
            <div className={props.a}><div className="projectheader">{props.title}</div></div>
            <div className={props.b}><div className="projectcontent">{props.text}</div></div>
            <div className="center"><ExpandMore id={props.down}/><ExpandLess id={props.up}/>
            <a href onClick={scrollToTop}><img className="totop" src={Totop} alt=""></img></a>
          </div></div>
        
      </>
    )
  }

  //<div><img className="projectpicture" src={props.pic}></img></div>



  const NextProjects = (props) => {
    return(
      <>
        <div className="projectideas" id={props.id}>
          <div className="projectideasheader">
            <div className={props.c1}>
              Project ideas?
            </div>
          </div>
          <div className="projectideascontent">
            <p className={props.c4}>A stock tracking application</p>
            <p className={props.c2}>Restructuring of the weather app and the currency converter</p>
            <p className={props.c3}>A blackjack game</p>
            <p className={props.c5}></p>
          </div>
          <div className="projectideasfooter">
            <ExpandLess id={props.up}/>
            <a href onClick={scrollToTop}><img className="totop" src={Totop} alt=""></img></a>
          </div>
        </div>
      </>
    )
  }

  return(
    <>
      <Top id="top"/>
      <Project id="p1" class="projectleft" title="Newsfeedapp" a={luokka.b} pic={newsfeedapp} b={luokka.c} text={newsfeedapptext} down="p2" up="top" link="https://newsfeedapp-by-aojarv.com"/>

      <Project id="p2" class="projectright" title="Portfolio" a={luokka.d} pic={portfolio} b={luokka.e} text={portfoliotext} down="p3" up="p1"/>

      <Project id="p3" class="projectleft" title="Weatherapp and Currency Converter" a={luokka.c} pic={weatherapp} pic2={currencyconverter} b={luokka.a} text={CCandWAtext} down="p4" up="p2"/>

      <NextProjects id="p4" up="p3" c1={luokka.a} c2={luokka.b} c3={luokka.c} c4={luokka.d} c5={luokka.e}/>
    </>
  )
}

export default Projects