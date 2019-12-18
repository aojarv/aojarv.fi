import React from 'react'
import { Link } from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/expandicon.css'

const ExpandMore = (props) => {
    return(
        <Link 
        className="linkki"
        activeClass="active"
        to={props.id}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >
          <ExpandMoreIcon fontSize="large" className="expandicon"/>
        </Link>
    )
}

export default ExpandMore;