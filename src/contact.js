import React, { useEffect, useState } from "react";
import "./css/contact.css";
import { Link as Linkki } from "react-router-dom";
//import Github from './icons/GitHub-Mark-120px-plus.png'
import Github from "./icons/github.png";
import Linkedin from "./icons/linked.png";
import ExpandMore from "./ExpandMoreIcon.js";
import ExpandLess from "./ExpandLessIcon";

const Contact = () => {
  const [luokka, setLuokka] = useState({});

  // Always when the component renders, a random color palette of 5 colors from colors.css is chosen
  useEffect(() => {
    const array = [
      "a",
      "d",
      "e",
      "f",
      "g",
      "m",
      "n",
      "o",
      "q",
      "s",
      "x",
      "aa",
      "bb",
      "dd"
    ];

    const lol = Math.floor(Math.random() * array.length);

    let object = {
      a: array[lol] + "1",
      b: array[lol] + "2",
      c: array[lol] + "3",
      d: array[lol] + "4",
      e: array[lol] + "5"
    };
    setLuokka(object);
  }, []);

  //Component for "top", the links to other components and a header are rendered here
  const Top = () => {
    return (
      <div className="top">
        <div className="left">
          <div className={luokka.a}>
            <Linkki className="link" to="/">
              Home
            </Linkki>
          </div>
          <div className={luokka.b}>
            <Linkki className="link" to="/whoami">
              Who am I
            </Linkki>
          </div>
          <div className={luokka.c}>
            <Linkki className="link" to="/projects">
              Projects
            </Linkki>
          </div>
          <div className={luokka.d}>
            <Linkki className="link" to="/faq">
              Faq
            </Linkki>
          </div>
        </div>
        <div className="contact">
          <h1 className={luokka.e}>Contact</h1>
          <ExpandMore id="c1" />
        </div>
        <div className="right"></div>
      </div>
    );
  };

  // Component for the links to my GitHub and LinkedIn
  const HowToContact = props => {
    return (
      <>
        <div className="bottom" id={props.id}>
          <div className="topofbottom">
            <a
              href="https://github.com/aojarv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="github" src={Github} alt="GitHub"></img>
            </a>

            <a
              href="https://www.linkedin.com/in/antti-j%C3%A4rvel%C3%A4inen-48339919a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="linkedin" src={Linkedin} alt="LinkedIn"></img>
            </a>
          </div>
          <div className="bottomofbottom">
            <ExpandLess id="top" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Top id="top" />
      <HowToContact id="c1" />
    </>
  );
};

export default Contact;
