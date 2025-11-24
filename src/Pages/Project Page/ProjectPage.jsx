import React from "react";
import "./ProjectPage.css";
import Project from "../../Component/Project/Project";
import NavBar from "../../Component/Nav bar/NavBar";
import Footer from "../../Component/Footer/Footer";

const project = () => {
  return (
    <div className="project-page">
      <NavBar />
      <Project />
      <Footer />
    </div>
  );
};

export default project;
