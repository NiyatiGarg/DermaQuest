import React, { useState, useEffect, useContext } from "react";

import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../DermaQuest.svg";

import { AppContext } from '../../AppContext';

import { RiHome9Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { RiInkBottleLine } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineQuiz } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import "./SideNav.css";

const SideNav = () => {

    const { pageTheme, setPageTheme, isSmallScreen, openSideNav , setOpenSideNav } = useContext(AppContext);

  return (
    <>
      {isSmallScreen ? (
        <>
          {openSideNav ? (
            <div
              className="d-flex flex-column h-100 w-100 flex-column overflow-hidden position-fixed"
              style={{ background: 'white', zIndex: 2, position: "absolute", background: pageTheme, top:0  }}
            >
                <div
              className="align-items-start justify-content-start d-flex w-100 p-4"
              style={{ }}
            >
              <RiMenu2Fill
                style={{ fontSize: "2.5rem" }}
                onClick={() => setOpenSideNav(!openSideNav)}
              />
            </div>
            <>
            
            
              <nav className="d-flex align-items-center flex-column gap-4 m-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-nav-link font-mobile"
                      : "nav-link font-mobile gap-2"
                  }
                  exact
                  to="/"
                  onClick={() => setOpenSideNav(false)}
                >
                  {" "}
                  <RiHome9Line /> <span className="p-2">Home </span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-nav-link font-mobile "
                      : "nav-link font-mobile gap-2"
                  }
                  exact
                  to="/blogs"
                  onClick={() => setOpenSideNav(false)}
                >
                  {" "}
                  <FaRegBookmark />
                  <span className="p-2">Blogs</span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-nav-link font-mobile"
                      : "nav-link font-mobile gap-2"
                  }
                  exact
                  to="/ingredients"
                  onClick={() => setOpenSideNav(false)}
                >
                  {" "}
                  <RiInkBottleLine />
                  <span className="p-2">Ingredients</span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-nav-link font-mobile "
                      : "nav-link font-mobile gap-2"
                  }
                  exact
                  to="/quiz"
                  onClick={() => setOpenSideNav(false)}
                >
                  {" "}
                  <MdOutlineQuiz />
                  <span className="p-2">Take a Quiz</span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-nav-link font-mobile "
                      : "nav-link font-mobile gap-2"
                  }
                  exact
                  to="/about"
                  onClick={() => setOpenSideNav(false)}
                >
                  {" "}
                  <GrStatusInfo />
                  <span className="p-2">About Us</span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-nav-link font-mobile "
                      : "nav-link font-mobile gap-2"
                  }
                  exact
                  to="/contact"
                  onClick={() => setOpenSideNav(false)}
                >
                  {" "}
                  <MdOutlineMarkEmailRead />
                  <span className="p-2">Contact Us</span>
                </NavLink>
              </nav>
            </>
              
            </div>
          ) : (
            <div
              className="align-items-start justify-content-start d-flex w-100 p-4"
              style={{ zIndex: 2, position: "absolute" }}
            >
              <RiMenu2Fill
                style={{ fontSize: "2.5rem" }}
                onClick={() => setOpenSideNav(!openSideNav)}
              />
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default SideNav;
