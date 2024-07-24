// Header.js

import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../DermaQuest.svg';

import { AppContext } from '../AppContext';

const Header = () => {

    const { pageTheme, setPageTheme } = useContext(AppContext);

    const location = useLocation(); // Get the current location object
    const ColorsArray = [
        { pagename: '/', theme: 'rgb(246, 180, 144)' }, // Home
        { pagename: '/quiz', theme: 'rgb(154, 175, 143)' }, // Quiz
        { pagename: '/about', theme: 'rgb(144, 180, 246)' }, // About Us
        { pagename: '/contact', theme: 'rgb(184, 135, 152)' }, //Contact Us
        { pagename: '/ingredients', theme: 'rgb(122, 165, 195)' }, // Updated color for Ingredients
        { pagename: '/blogs', theme: 'rgb(158, 141, 163)' }, // Updated color for Blogs
    ];

    const Color = ColorsArray.find(obj => obj.pagename === location.pathname).theme || 'rgb(246, 180, 144)'; // Default color

    useEffect(() => {
        setPageTheme(Color);
    }, [location])

    return (
        <header className="d-flex align-items-center justify-content-between " style={{ display: 'flex', padding: '2rem 10rem', backgroundColor: pageTheme }}>
            <div>
                <img src={Logo} className="App-logo" alt="logo" />
            </div>
            <nav className='d-flex align-items-center' style={{ gap: '40px', fontSize: '1rem' }}>
                <NavLink className="nav-link" activeClassName="active-nav-link" exact to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" exact to="/blogs">Blogs</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" exact to="/ingredients">Ingredients</NavLink>
                <NavLink className="nav-link " activeClassName="active-nav-link" to="/quiz">Take a Quiz</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/about">About Us</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/contact">Contact Us</NavLink>
            </nav>
        </header>
    );
}

export default Header;
