import React from "react";
import "./Service.css";
import Separator from "../../assets/separatorBlack.png";

const Services = () => {
  return (
    <div className="services">
      <div className="title">
        <h1>WHAT I DO</h1>
        <p>I help companies build better websites and products.</p>
      </div>
      <div className="separator">
        <img src={Separator} alt="" />
      </div>
      <div className="services-group">
        <div className="service">
          <h1>Web App Development</h1>
          <p>
            Websites that look good and work even better. I design clean, modern
            pages that build trust and guide visitors toward action.
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Tailored layout and visuals for your brand</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Built around clear goals and conversions</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Mobile-first and responsive on all devices</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Fast-loading and accessible for everyone</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Easy to scale, maintain and update</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Strong visual hierarchy for quick understanding</span>
            </li>
          </ul>
        </div>
        <div className="service">
          <h1>Mobile App Development</h1>
          <p>
            Apps that are easy to use and hard to quit. I design clear, fast
            interfaces that help people do what they came to do.
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Focused on real user behavior and needs</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Logical flows that make sense right away</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Design systems for consistency and speed</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Works smoothly on every device and screen</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Developer-friendly setup for fast implementation</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Every screen built with usability first</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="separator">
        <img src={Separator} alt="" />
      </div>
    </div>
  );
};

export default Services;
