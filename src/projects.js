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

  const newsfeedapptext = "A newsfeed app that I created by using React and NodeJS. Currently runs in AWS. Fetches data from The New York Times' API and displays 20 newest articles, articles from 26 different sections and most shared and viewed articles of The NY Times."

  const portfoliotext = "aojarv.fi, this site. I created this one to introduce me and my projects. Created by using React. Runs on Google Firebase. Focus was on design and creating well structured code. Still a lot to be improved. Will try to keep this site up to date."

  const CCandWAtext = "For example a weatherapp and a currency converter. Simple projects that I created by using React just to learn to use APIs. Scrappy design and poor structure in codes. No backend. Will make them better at some point."

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
            <div className={luokka.a}><Linkki className="link" to="/">Home</Linkki></div>
            <div className={luokka.b}><Linkki className="link" to="/whoami">Who am I</Linkki></div>
          </div>
          <div className="projects">
            <h1 className={luokka.e}>Projects</h1>
            <ExpandMore id="p1"/>
          </div>
          <div className="right">
            <div className={luokka.c}><Linkki className="link" to="/faq">Faq</Linkki></div>
            <div className={luokka.d}><Linkki className="link" to="/contact">Contact</Linkki></div>
          </div>
        </div>
      )
    }



  const Project = (props) => {
    return(
      <>
        <div className={props.class} id={props.id}>
          <div className={props.a}><div className="projectheader">{props.title}</div></div>
          <div className={props.b}><div className="projectcontent">{props.text} <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linktext}</a></div></div>
          <div className="center">
            <ExpandMore id={props.down}/>
            <ExpandLess id={props.up}/>
            <a href onClick={scrollToTop}><img className="totop" src={Totop} alt=""></img></a>
          </div>
        </div>
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
              What next?
            </div>
          </div>
          <div className="projectideascontent">
            <p className={props.c4}>A stock tracking application</p>
            <p className={props.c2}>A blackjack game</p>
            <p className={props.c3}></p>
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
      <Project id="p1" class="projectleft" title="Newsfeedapp" a={luokka.b} pic={newsfeedapp} b={luokka.c} text={newsfeedapptext} down="p2" up="top" link="https://newsfeedapp-by-aojarv.com" linktext="newsfeedapp-by-aojarv.com"/>

      <Project id="p2" class="projectright" title="Portfolio" a={luokka.d} pic={portfolio} b={luokka.e} text={portfoliotext} down="p3" up="p1"/>

      <Project id="p3" class="projectleft" title="Weatherapp and Currency Converter" a={luokka.c} pic={weatherapp} pic2={currencyconverter} b={luokka.a} text={CCandWAtext} down="p4" up="p2"/>

      <NextProjects id="p4" up="p3" c1={luokka.a} c2={luokka.b} c3={luokka.c} c4={luokka.d} c5={luokka.e}/>
    </>
  )
}

export default Projects