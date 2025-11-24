import React, { useEffect } from "react";
import "./Footer.css";
import S_logo from "../../assets/S-logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash]);

  return (
    <div className="footer">
      <div className="top-footer">
        <div className="footer-title">
          <div className="s-logo">
            <img src={S_logo} alt="" />
          </div>
          <h1>Shista Chakma</h1>
        </div>
        <div className="mid-footer">
          <a href="#top" className="go-up">
            <i className="fa-solid fa-angles-up"></i>
            <p>BACK TO TOP</p>
          </a>
          <div className="find-me">
            <a href="https://www.facebook.com/Re.ShisTo/" target="_blank">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shista-chakma-764574210"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:shistachakma24@gmailcom" target="_blank">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="footer-pages">
          <p>PAGES</p>
          <ul>
            <li>
              <Link to="/#about-top" replace={false}>
                About me
              </Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="down-footer">
        <p>© 2025 Shista Chakma All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
