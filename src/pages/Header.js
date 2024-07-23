// Header.js

import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../DermaQuest.svg';

import { AppContext } from '../AppContext';

const Header = () => {

    const { setBgColor } = useContext(AppContext);

    const location = useLocation(); // Get the current location object
    const ColorsArray = [
        { pathname: '/', color: 'rgb(246, 180, 144)' }, // Home
        { pathname: '/quiz', color: 'rgb(180, 246, 144)' }, // Quiz
        { pathname: '/about', color: 'rgb(144, 180, 246)' }, // About Us
        { pathname: '/contact', color: 'rgb(246, 144, 180)' }, //Contact Us
    ];

    const backgroundColor = ColorsArray.find(obj => obj.pathname === location.pathname).color || 'rgb(246, 180, 144)'; // Default color

    console.log(backgroundColor, 'bg color is here')
    useEffect(() => {
        setBgColor(backgroundColor);
    }, [location])

    return (
        <header className="d-flex align-items-center justify-content-between " style={{ display: 'flex', padding: '2rem 10rem' }}>
            <div>
                <img src={Logo} className="App-logo" alt="logo" />
            </div>
            <nav className='d-flex align-items-center' style={{ gap: '3rem', fontSize: '1.2rem' }}>
                <NavLink className="nav-link" activeClassName="active-nav-link" exact to="/">Home</NavLink>
                <NavLink className="nav-link " activeClassName="active-nav-link" to="/quiz">Quiz</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/about">About Us</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/contact">Contact Us</NavLink>
            </nav>
        </header>
    );
}

export default Header;
