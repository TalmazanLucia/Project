import React from 'react';
import './Button.scss'

const Button = ({text, children}) => {

    return (
        <button className='button-wrapper'>
            <p>{text}</p>
            {children}
        </button>
    )
}

export default Button;