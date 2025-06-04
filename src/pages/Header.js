// Header.js

import React, { useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../aa.svg';
import { AppContext } from '../AppContext';
import './Header.css';
import SideNav from './components/SideNav';
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
    const { 
        pageTheme, 
        setPageTheme, 
        isSmallScreen, 
        openSideNav, 
        setOpenSideNav, 
        setContrastColor,
        contrastColor 
    } = useContext(AppContext);

    const location = useLocation();

    const ColorsArray = [
        { pagename: '/', theme: 'rgb(247, 238, 234)' },        // Softer pink
        { pagename: '/quiz', theme: 'rgb(234, 242, 230)' },    // Soft sage green
        { pagename: '/about', theme: 'rgb(230, 237, 247)' },   // Soft blue
        { pagename: '/contact', theme: 'rgb(242, 234, 238)' }, // Soft rose
        { pagename: '/ingredients', theme: 'rgb(230, 240, 247)' }, // Soft sky blue
        { pagename: '/blogs', theme: 'rgb(238, 234, 242)' },   // Soft purple
    ];

    const ContrastColors = [
        { pagename: '/', theme: 'rgb(89, 42, 21)' },          // Deep brown
        { pagename: '/quiz', theme: 'rgb(52, 89, 42)' },      // Forest green
        { pagename: '/about', theme: 'rgb(42, 63, 89)' },     // Navy blue
        { pagename: '/contact', theme: 'rgb(89, 42, 63)' },   // Deep rose
        { pagename: '/ingredients', theme: 'rgb(21, 63, 89)' }, // Deep blue
        { pagename: '/blogs', theme: 'rgb(63, 42, 89)' },     // Deep purple
    ];

    useEffect(() => {
        const matchedColor = ColorsArray.find(item => item.pagename === location.pathname)?.theme;
        if (matchedColor) {
            setPageTheme(matchedColor);
            document.documentElement.style.setProperty('--theme-color', matchedColor);
        }
        
        const matchedContrast = ContrastColors.find(item => item.pagename === location.pathname)?.theme;
        if (matchedContrast) {
            setContrastColor(matchedContrast);
            document.documentElement.style.setProperty('--contrast-color', matchedContrast);
        }
    }, [location.pathname, setPageTheme, setContrastColor]);

    const toggleSideNav = () => {
        setOpenSideNav(!openSideNav);
    };

    return (
        <>
            <header className="header" style={{ backgroundColor: pageTheme }}>
                <div className="header-content">
                    <div className="logo-container">
                        <img src={Logo} alt="DermaQuest Logo" className="app-logo" />
                    </div>
                    
                    <nav className={`nav-menu ${openSideNav && isSmallScreen ? 'mobile-menu-open' : ''}`}>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/">
                            Home
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/blogs">
                            Blogs
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/ingredients">
                            Ingredients
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/quiz">
                            Take a Quiz
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/about">
                            About Us
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"} to="/contact">
                            Contact Us
                        </NavLink>
                    </nav>

                    {isSmallScreen && (
                        <button 
                            className="mobile-menu-icon"
                            onClick={toggleSideNav}
                            aria-label="Toggle navigation menu"
                        >
                            <RiMenu2Fill />
                        </button>
                    )}
                </div>
            </header>

            {isSmallScreen && openSideNav && <SideNav />}
        </>
    );
};

export default Header;
