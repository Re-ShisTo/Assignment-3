import React, { useEffect, useState } from "react";
import "./NavBar.css";
import S_logo_black from "../../assets/S-logo-black.png";
import S_logo from "../../assets/S-logo.png";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

const NavBar = () => {
  //useLocation for about section
  const { hash } = useLocation();
  //for active menu when linked
  const [menuActive, setMenuActive] = useState(false);
  //menubar for smaller screen
  const [menuBar, setMenuBar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash]);

  return (
    <div className="flex-box nav" id="top">
      <picture className="logo" onClick={() => navigate("/")}>
        <source srcSet={S_logo} media="(max-width: 768px)" />
        <img src={S_logo_black} alt="" />
      </picture>
      <div className="nav-list flex-box">
        <ul
          className={menuActive ? "flex-box on-menu open" : "flex-box on-menu"}
        >
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuActive(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#about-top"
              replace={false}
              className={({ isActive }) => (isActive ? "notActive" : "")}
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="btn">Download CV</button>
        <div
          className={
            menuBar ? "menu-bars on-menuBar cross" : "menu-bars on-menuBar"
          }
          onClick={() => {
            setMenuActive(!menuActive);
            setMenuBar(!menuBar);
          }}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
