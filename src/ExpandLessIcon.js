import React from 'react'
import { Link } from 'react-scroll'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './css/expandicon.css'

// Arrow button for moving between components
const ExpandLess = (props) => {
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
          <ExpandLessIcon fontSize="large" className="expandicon"/>
        </Link>
    )
}

export default ExpandLess;