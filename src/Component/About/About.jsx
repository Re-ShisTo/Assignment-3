import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import Separator from "../../assets/separatorBlack.png";
import Dev_img from "../../assets/Dev.png";
import Main_img from "../../assets/maintanance.png";
import HTML5 from "../../assets/HTML5.png";
import CSS3 from "../../assets/CSS3.png";
import Javascript from "../../assets/Javascript.png";
import Tailwind from "../../assets/tailwindcss.png";
import Reactjs from "../../assets/React.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Git from "../../assets/Git.png";
import Nodejs from "../../assets/Nodejs.png";
import Expressjs from "../../assets/Express.png";
import MongoDB from "../../assets/MongoDB.png";

const About = () => {
  const skillRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="about" id="about-top">
        <h1 className="about-me">ABOUT ME</h1>
        <p className="about-p">
          I am Shista Chakma, a dedicated Front-End Developer with strong
          expertise in HTML, CSS, Tailwind CSS, JavaScript, and React. I
          specialize in creating responsive, efficient, and visually appealing
          web interfaces that prioritize both performance and user experience.
        </p>
        <div className="separator">
          <img src={Separator} alt="" />
        </div>
        <div className="about-part">
          <div className="part dev">
            <div className="dev-img">
              <img src={Dev_img} alt="" />
            </div>
            <h1>DEVELOPMENT</h1>
            <p>
              My primary strength lies in front-end development, where I focus
              on building clean, efficient, and scalable web applications. I
              have hands-on experience turning creative design concepts into
              interactive, user-friendly websites using modern technologies and
              frameworks.
            </p>
          </div>
          <div className="part main">
            <div className="main-img">
              <img src={Main_img} alt="" />
            </div>
            <h1>MAINTANANCE</h1>
            <p>
              Beyond development, I am equally proficient in website
              maintenance. I ensure that every site I build remains optimized,
              secure, and up to date with the latest standards. This includes
              improving load times, fixing bugs, enhancing accessibility, and
              implementing updates to ensure long-term stability and
              performance.
            </p>
          </div>
          <div className="part solve">
            <i className="fa-solid fa-puzzle-piece solve-icon"></i>
            <h1>PROBLEM SOLVING</h1>
            <p>
              I take pride in my strong problem-solving abilities, which allow
              me to identify, analyze, and resolve technical challenges
              efficiently. Whether it's debugging complex code, improving
              responsiveness, or enhancing component performance, I approach
              each issue with patience, logic, and creativity. This mindset
              helps me continuously improve my work and deliver reliable,
              high-quality solutions.
            </p>
          </div>
        </div>
        <div className="separator">
          <img src={Separator} alt="" />
        </div>
        <h1 className="SKILLS">SKILLS</h1>
        <div className="skills">
          <h2>USING NOW:</h2>
          <div className="in-use" ref={skillRef}>
            <div className="skill html">
              <div className="skill-container">
                <img src={HTML5} alt="" />
                <p>100%</p>
                <div className={`fill-1 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>HTML5</strong>
            </div>
            <div className="skill css">
              <div className="skill-container">
                <img src={CSS3} alt="" />
                <p>90%</p>
                <div className={`fill-2 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>CSS3</strong>
            </div>
            <div className="skill javascript">
              <div className="skill-container">
                <img src={Javascript} alt="" />
                <p>85%</p>
                <div className={`fill-3 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>JAVASCRIPT</strong>
            </div>
            <div className="skill tailwind">
              <div className="skill-container">
                <img src={Tailwind} alt="" />
                <p>75%</p>
                <div className={`fill-4 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>TAILWIND</strong>
            </div>
            <div className="skill reactjs">
              <div className="skill-container">
                <img src={Reactjs} alt="" />
                <p>90%</p>
                <div className={`fill-5 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>REACT</strong>
            </div>
            <div className="skill bootstrap">
              <div className="skill-container">
                <img src={Bootstrap} alt="" />
                <p>80%</p>
                <div className={`fill-6 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>BOOTSTRAP</strong>
            </div>
            <div className="skill git">
              <div className="skill-container">
                <img src={Git} alt="" />
                <p>60%</p>
                <div className={`fill-7 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>GIT</strong>
            </div>
          </div>
          <h2>LEARNING:</h2>
          <div className="learning">
            <div className="skill nodejs">
              <div className="skill-container">
                <img src={Nodejs} alt="" />
                <p>50%</p>
                <div className={`fill-8 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>NODEJS</strong>
            </div>
            <div className="skill expressjs">
              <div className="skill-container">
                <img src={Expressjs} alt="" />
                <p>40%</p>
                <div className={`fill-9 fill ${visible ? "active" : ""}`}></div>
              </div>
              <strong>EXPRESSJS</strong>
            </div>
            <div className="skill mongodb">
              <div className="skill-container">
                <img src={MongoDB} alt="" />
                <p>30%</p>
                <div
                  className={`fill-10 fill ${visible ? "active" : ""}`}
                ></div>
              </div>
              <strong>MONGODB</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
