import React from "react";
import "./Project.css";
import Project_1 from "../../assets/Project-1.png";
import Project_2 from "../../assets/Project-2.png";
import Project_3 from "../../assets/project-3.png";

const Project = () => {
  return (
    <div className="project">
      <div className="heading">
        <h1>PROJECTS</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-img">
            <img src={Project_1} alt="" />
          </div>
          <div className="details">
            <h1>CryptoPalace</h1>
            <p>To keep a track on Cryptocurrency market</p>
            <a href="#">Live Link</a>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={Project_2} alt="" />
          </div>
          <div className="details">
            <h1>NetFlix(Clone)</h1>
            <p>Netflix clone using TMDB API</p>
            <a href="https://netflick-topaz.vercel.app/" target="_blank">
              Live Link
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={Project_3} alt="" />
          </div>
          <div className="details">
            <h1>VidTube</h1>
            <p>Video Content media using Google API</p>
            <a href="https://shista-vidtube.netlify.app/" target="_blank">
              Live Link
            </a>
          </div>
        </div>
        <div className="card no-card">
          <div className="card-img">
            <img src={Project_1} alt="" />
          </div>
          <div className="details">
            <h1>CryptoPalace</h1>
            <p>To keep a track on Cryptocurrency market</p>
            <a href="#">Live Link</a>
          </div>
        </div>
        <div className="card no-card">
          <div className="card-img">
            <img src={Project_2} alt="" />
          </div>
          <div className="details">
            <h1>NetFlix(Clone)</h1>
            <p>Netflix clone using TMDB API</p>
            <a href="https://netflick-topaz.vercel.app/" target="_blank">
              Live Link
            </a>
          </div>
        </div>
        <div className="card no-card">
          <div className="card-img">
            <img src={Project_3} alt="" />
          </div>
          <div className="details">
            <h1>VidTube</h1>
            <p>Video Content media using Google API</p>
            <a href="https://shista-vidtube.netlify.app/" target="_blank">
              Live Link
            </a>
          </div>
        </div>
      </div>
      <div className="explore">
        <a href="/project">Explore More</a>
      </div>
    </div>
  );
};

export default Project;
