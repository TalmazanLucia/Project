import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss'

const Button = ({text, children, isLink, pathName, onClick}) => {

    if (!isLink) {
        return (
            <button className='button-wrapper' onClick={onClick}>
                <p>{text}</p>
                {children}
            </button>
        )
     } else {
        return (
            <Link to={pathName} className='button-wrapper'>
                <p>{text}</p>
                {children}
            </Link>  
        )
     }
}

export default Button;