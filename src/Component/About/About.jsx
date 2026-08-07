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
import Expressjs from "../../assets/Express.png";
import MongoDB from "../../assets/MongoDB.png";
import Python from "../../assets/python.png";
import C from "../../assets/c++.png";
import Nextjs from "../../assets/nextjs.png";
import Redux from "../../assets/redux.png";
import Firebase from "../../assets/firebase.png";
import MySQL from "../../assets/mysql.png";
import MariaDB from "../../assets/mariadb.png";
import PostgreSQL from "../../assets/postgresql.png";
import Sqlite from "../../assets/sqlite.png";

// Reusable component that observes its own visibility
const SkillItem = ({ img, percentage, fillClass, label, className = "" }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`skill ${className}`} ref={itemRef}>
      <div className="skill-container">
        <img src={img} alt={label} />
        <p>{percentage}%</p>
        <div className={`${fillClass} fill ${isVisible ? "active" : ""}`}></div>
      </div>
      <strong>{label}</strong>
    </div>
  );
};

const About = () => {
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

        {/* skills section start */}
        <h1 className="SKILLS">SKILLS</h1>
        <div className="skills">
          <h2>Languages:</h2>
          <div className="in-use">
            <SkillItem
              img={HTML5}
              percentage={100}
              fillClass="fill-1"
              label="HTML5"
              className="html"
            />
            <SkillItem
              img={CSS3}
              percentage={90}
              fillClass="fill-2"
              label="CSS3"
              className="css"
            />
            <SkillItem
              img={Javascript}
              percentage={90}
              fillClass="fill-3"
              label="JAVASCRIPT"
              className="javascript"
            />
            <SkillItem
              img={Python}
              percentage={70}
              fillClass="fill-4"
              label="PYTHON"
              className="python"
            />
            <SkillItem
              img={C}
              percentage={70}
              fillClass="fill-5"
              label="C++"
              className="C++"
            />
          </div>

          <h2>Libraries and Frameworks</h2>
          <div className="in-use">
            <SkillItem
              img={Reactjs}
              percentage={90}
              fillClass="fill-6"
              label="REACT"
              className="reactjs"
            />
            <SkillItem
              img={Redux}
              percentage={80}
              fillClass="fill-7"
              label="REDUX"
              className="reactjs"
            />
            <SkillItem
              img={Nextjs}
              percentage={80}
              fillClass="fill-8"
              label="NEXTJS"
              className="reactjs"
            />
            <SkillItem
              img={Tailwind}
              percentage={90}
              fillClass="fill-9"
              label="TAILWIND"
              className="tailwind"
            />
            <SkillItem
              img={Expressjs}
              percentage={80}
              fillClass="fill-10"
              label="EXPRESSJS"
              className="expressjs"
            />
            <SkillItem
              img={Bootstrap}
              percentage={80}
              fillClass="fill-11"
              label="BOOTSTRAP"
              className="bootstrap"
            />
          </div>

          <h2>Databases and SQL:</h2>
          <div className="in-use">
            <SkillItem
              img={Firebase}
              percentage={70}
              fillClass="fill-12"
              label="FIREBASE"
              className="mongodb"
            />
            <SkillItem
              img={MongoDB}
              percentage={80}
              fillClass="fill-13"
              label="MONGODB"
              className="mongodb"
            />
            <SkillItem
              img={MySQL}
              percentage={70}
              fillClass="fill-14"
              label="MYSQL"
              className="mongodb"
            />
            <SkillItem
              img={PostgreSQL}
              percentage={80}
              fillClass="fill-15"
              label="POSTGRESQL"
              className="mongodb"
            />
            <SkillItem
              img={Sqlite}
              percentage={90}
              fillClass="fill-16"
              label="SQLITE"
              className="mongodb"
            />
            <SkillItem
              img={MariaDB}
              percentage={60}
              fillClass="fill-17"
              label="MARIADB"
              className="mongodb"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
