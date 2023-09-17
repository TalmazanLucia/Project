import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AvatarIcon, LinesIcon, LogoIcon } from '../../../shared/assets';
import { Button } from '../../../shared/Button'
import './Navbar.scss'
import { auth } from '../../../shared/providers/firebase';
import {signOut, onAuthStateChanged } from 'firebase/auth'

const Navbar = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logOut = () => {
      console.log("Logging out...");
      signOut(auth)
        .then(() => {
          console.log("Logged out successfully");
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    };    

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    
      return () => unsubscribe();
    }, [auth]);

    return (
        <div className='navbar-wrapper'>
          <LogoIcon />
          <div className='links'>
            <Link className="link-item" to="/">Home</Link>
            <Link className="link-item" to="/blog">Blog</Link>
            <div className="multi-links-wrapper">
              <p className="link-item" onClick={() => setSubmenuOpen(!submenuOpen)}>Pages</p>
              {
                submenuOpen && (
                  <div className="multi-links-submenu">
                    <Link className="link-item" to="/barbershop">Barbershop</Link>
                    <Link className="link-item" to="/gym">Gym</Link>
                    <Link className="link-item" to="/medicine">Medicine</Link>
                    <Link className="link-item" to="/restaurants">Restaurants</Link>
                    <Link className="link-item" to="/spa">Spa</Link>
                  </div>
                )
              }
            </div>
            <Link className="link-item" to="/gallery">Gallery</Link>
            <Link className="link-item" to="/contact">Contact</Link>
          </div>
          {
            isLoggedIn ? (
              <Button text={"Login"} isLink pathName={'/login'}>
                <AvatarIcon />
              </Button>
            ) : (
              <Button text={"Log out"} onClick={logOut}/>
            )
          }
        </div>
    )
}

export default Navbar;