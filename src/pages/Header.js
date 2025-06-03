// Header.js

import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../aa.svg';

import { AppContext } from '../AppContext';
import './Header.css';
import SideNav from './components/SideNav';

import { RiMenu2Fill } from "react-icons/ri";


const Header = () => {

    const { pageTheme, setPageTheme, isSmallScreen, openSideNav, setOpenSideNav, setContrastColor } = useContext(AppContext);

    const location = useLocation(); // Get the current location object
const currentPath = location.pathname;

    const ColorsArray = [
        { pagename: '/', theme: 'rgb(239, 223, 216)' },
        { pagename: '/quiz', theme: 'rgb(213, 228, 205)' }, 
        { pagename: '/about', theme: 'rgb(195, 211, 240)' }, 
        { pagename: '/contact', theme: 'rgb(219, 194, 203)' }, 
        { pagename: '/ingredients', theme: 'rgb(182, 210, 231)' }, 
        { pagename: '/blogs', theme: 'rgb(208, 195, 212)' },
    ];
     const ContrastColors= [
      { pagename: '/', theme: 'rgb(51, 24, 12)' },
        { pagename: '/quiz', theme: 'rgb(75, 100, 61)' }, 
        { pagename: '/about', theme: 'rgb(65, 79, 106)' }, 
        { pagename: '/contact', theme: 'rgb(95, 48, 65)' }, 
        { pagename: '/ingredients', theme: 'rgb(24, 56, 79)' }, 
        { pagename: '/blogs', theme: 'rgb(55, 35, 61)' },
     ]

    useEffect(() => {
        let matchedColor = ColorsArray.find(item => item.pagename==location.pathname)?.theme;
        if (matchedColor) {
          setPageTheme(matchedColor);
        }
        let matchedContrast = ContrastColors.find(item => item.pagename==location.pathname)?.theme;
        if (matchedContrast) {
          setContrastColor(matchedContrast);
        }
      }, [location.pathname]);

    return (
        
        <>
        <header className="d-flex align-items-center justify-content-between parent" style={{ display: 'flex', padding: '0vh 10vw', backgroundColor: pageTheme, overflow: 'scroll' }}>
                <img src={Logo} style={{height: '72px', padding: '5px', background: 'white'}} alt='appLogo' className='appLogo my-2'/>
            <nav className='d-flex align-items-center ' style={{ gap: '3vw' }}>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} exact to="/" >Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} exact to="/blogs">Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} exact to="/ingredients" >Ingredients</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} to="/quiz" >Take a Quiz</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} to="/about" >About Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} to="/contact" >Contact Us</NavLink>
            </nav>
        </header>

        {/* menuIcon for mobile view */}
              {isSmallScreen?
                <>
                <div className='align-items-start justify-content-start d-flex p-4' style={{}}>
                    <RiMenu2Fill style={{fontSize: '2.5rem'}} onClick={()=>setOpenSideNav(!openSideNav)}/>
                  </div>
                  {openSideNav?
                    <>
                    <SideNav/>
                    </>
                  :
                  null
                  }
                </>
              
                :null
              }
        </>


    );
}

export default Header;
