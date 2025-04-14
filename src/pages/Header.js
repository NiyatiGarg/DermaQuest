// Header.js

import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../DermaQuest.svg';

import { AppContext } from '../AppContext';

const Header = () => {

    const { pageTheme, setPageTheme,  } = useContext(AppContext);

    const location = useLocation(); // Get the current location object
const currentPath = location.pathname;

    const ColorsArray = [
        { pagename: '/', theme: 'rgb(238,195,176)' },
        { pagename: '/quiz', theme: 'rgb(154, 175, 143)' }, 
        { pagename: '/about', theme: 'rgb(144, 180, 246)' }, 
        { pagename: '/contact', theme: 'rgb(184, 135, 152)' }, 
        { pagename: '/ingredients', theme: 'rgb(122, 165, 195)' }, 
        { pagename: '/blogs', theme: 'rgb(158, 141, 163)' },
    ];

    useEffect(() => {
        let matchedColor = ColorsArray.find(item => item.pagename==location.pathname)?.theme;
    console.log(matchedColor, '<--- theme'); 
        if (matchedColor) {
          setPageTheme(matchedColor);
        }
      }, [location.pathname]);

    return (
        <header className="d-flex align-items-center justify-content-between " style={{ display: 'flex', padding: '2vh 10vw', backgroundColor: pageTheme, boxShadow: '0 0 10px rgba(0, 0, 0, 0.9)', }}>
            <div>
                <img src={Logo} className="App-logo" alt="logo" />
            </div>
            <nav className='d-flex align-items-center' style={{ gap: '5vw', fontSize: '1.2vw' }}>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} exact to="/" >Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} exact to="/blogs">Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} exact to="/ingredients" >Ingredients</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/quiz" >Take a Quiz</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/about" >About Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/contact" >Contact Us</NavLink>
            </nav>
        </header>
    );
}

export default Header;
