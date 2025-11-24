import React from "react";
import "./Hero.css";
import Hero_img from "../../assets/Hero_img.png";

const Hero = () => {
  return (
    <div className="hero flex-box">
      <div className="hero-intro">
        <p className="greet">Hi, I am</p>
        <h1>Shista Chakma</h1>
        <p className="work">Front-end Developer</p>
        <div className="links flex-box">
          <div className="link git">
            <a href="https://github.com/Re-ShisTo" target="_blank">
              <div className="git-container">
                <i className="fa-brands fa-github"></i>
              </div>
            </a>
          </div>
          <div className="link fb">
            <a href="https://www.facebook.com/Re.ShisTo/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="link in">
            <a
              href="https://www.linkedin.com/in/shista-chakma-764574210"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={Hero_img} alt="" />
        <p>this is not my photo but I dearly hope to get one like this</p>
      </div>
    </div>
  );
};

export default Hero;
