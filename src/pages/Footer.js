// Header.js

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../aa.svg';
import { AppContext } from '../AppContext';
import './Footer.css';
import { FaHome, FaBookOpen, FaFlask, FaQuestionCircle, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { contrastColor } = useContext(AppContext);

  const navigationLinks = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/blogs", label: "Blogs", icon: FaBookOpen },
    { path: "/ingredients", label: "Ingredients", icon: FaFlask },
    { path: "/quiz", label: "Take a Quiz", icon: FaQuestionCircle },
    { path: "/about", label: "About Us", icon: FaInfoCircle },
    { path: "/contact", label: "Contact Us", icon: FaEnvelope }
  ];

  return (
    <footer className="site-footer" style={{ '--theme-color': contrastColor }}>
      <div className="footer-content">
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <img 
              src={Logo} 
              alt="DermaQuest Logo" 
              className="footer-logo"
            />
            <p className="brand-description">
              Your trusted source for skincare knowledge and guidance.
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="footer-navigation">
            <div className="nav-section">
              <h3 className="nav-title">Quick Links</h3>
              <nav className="footer-nav">
                {navigationLinks.slice(0, 3).map(({ path, label, icon: Icon }) => (
                  <NavLink 
                    key={path}
                    to={path}
                    className={({ isActive }) => 
                      `footer-link ${isActive ? 'footer-link-active' : ''}`
                    }
                  >
                    <Icon className="nav-icon" />
                    {label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="nav-section">
              <h3 className="nav-title">Resources</h3>
              <nav className="footer-nav">
                {navigationLinks.slice(3).map(({ path, label, icon: Icon }) => (
                  <NavLink 
                    key={path}
                    to={path}
                    className={({ isActive }) => 
                      `footer-link ${isActive ? 'footer-link-active' : ''}`
                    }
                  >
                    <Icon className="nav-icon" />
                    {label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} DermaQuest. All rights reserved.
          </p>
          <p className="legal-text">
            This site is intended for IN consumers. Cookies and related technology are used for advertising. 
            To learn more, visit <a href="#" className="legal-link">AdChoices</a> and our <a href="#" className="legal-link">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
