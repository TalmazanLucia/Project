import React from 'react';
import { AvatarIcon, LinesIcon, LogoIcon } from '../../../shared/assets';
import { Button } from '../../../shared/Button'
import './Navbar.scss'

const Navbar = () => {

    return (
        <div className='navbar-wrapper'>
          <LogoIcon />
          <div className='links'>
            <p>Home</p>
            <p>Blog</p>
            <p>Pages</p>
            <p>Gallery</p>
            <p>Contact</p>
          </div>
          <Button text={"Login"} >
            <AvatarIcon />
          </Button>
        </div>
    )
}

export default Navbar;