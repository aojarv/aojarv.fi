import React, { useEffect, useState } from 'react'
import './css/home.css'
import './css/colors.css'
import { Link } from 'react-router-dom'  

const Home = () => {

    const [luokka, setLuokka] = useState({})

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
    
    const links = [
        {
            to: "/whoami",
            text: "Who am I",
            cn: luokka.b
        },
        {
            to: "/projects",
            text: "Projects",
            cn: luokka.c
        },
        {
            to: "/faq",
            text: "Faq",
            cn: luokka.d
        },
        {
            to: "/contact",
            text: "Contact",
            cn: luokka.e
        }
    ]

    const linksfromhome = links.map(item => <div className="links"><div className={item.cn}><Link className="link" to={item.to}><div className="linktext">{item.text}</div></Link></div></div>)

    const Name = (props) => {
        return(
            <div>
                <div className={luokka.a}>
                    <div className="header"><h1>{props.name}</h1></div>
                </div>
            </div>
        )
    }

    // Renders the home page
    return(
        <>
            <div className="home">
                <Name name="ANTTI JÄRVELÄINEN"/>
                {linksfromhome}
            </div>
        </>
    )
}

export default Home