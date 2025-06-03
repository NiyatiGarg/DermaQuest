// Header.js

import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../aa.svg';

import { AppContext } from '../AppContext';
import './Header.css';
import SideNav from './components/SideNav';

import { RiMenu2Fill } from "react-icons/ri";


const Footer = () => {

    const { pageTheme, setPageTheme, isSmallScreen, openSideNav, setOpenSideNav, contrastColor } = useContext(AppContext);


    return (
        
        <div className='d-flex flex-column gap-4' style={{ background: contrastColor, color: 'white'}}>
        <div className="d-flex align-items-start justify-content-between gap-4" style={{ display: 'flex', padding: '5vh 10vw'}}>
                <img src={Logo} style={{height: '72px', padding: '5px', background: 'white'}}  alt='appLogo' className='appLogo'/>
            <div className= 'd-flex'>
            <nav className='d-flex align-items-center flex-column ' style={{ gap: '2vw', fontSize: '1.2vw' }}>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} exact to="/" >Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} exact to="/blogs">Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} exact to="/ingredients" >Ingredients</NavLink>
                </nav>
            <nav className='d-flex align-items-center flex-column ' style={{ gap: '2vw', fontSize: '1.2vw' }}>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} to="/quiz" >Take a Quiz</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} to="/about" >About Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-link active-nav-link font-mobile" : "nav-link font-mobile"} to="/contact" >Contact Us</NavLink>
            </nav>
            </div>
            
            
            
            
        </div>
        <hr /> 
        <div className='justify-content-center d-flex' style={{padding: '1vh 10vw'}}>
                <p className=' d-flex text-center ' style={{fontSize: '0.7rem'}} > @ 2025 Copyright: This site is intended for IN consumers. Cookies and related technology are used for advertising. To learn more, visit AdChoices and our privacy policy</p>
            </div>

        {/* menuIcon for mobile view
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
              } */}
        </div>


    );
}

export default Footer;
