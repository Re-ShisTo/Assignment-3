import React from "react";
import MongoDB from "../../assets/MongoDB.png";
import useEffect, { useRef, useState } from "react";

const Skills = () => {
  const skillRef = useRef(null);
  const [visible, setVisible] = useState(false);

  //function for skills when they are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill mongodb">
      <div className="skill-container">
        <img src={MongoDB} alt="" />
        <p>80%</p>
        <div className={`fill-10 fill ${visible ? "active" : ""}`}></div>
      </div>
      <strong>MONGODB</strong>
    </div>
  );
};

export default Skills;
