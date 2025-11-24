import React from "react";
import NavBar from "../../Component/Nav bar/NavBar";
import Hero from "../../Component/Hero/Hero";
import Bio from "../../Component/Bio/Bio";
import About from "../../Component/About/About";
import Project from "../../Component/Project/Project";
import Service from "../../Component/Service/Service";
import Contact from "../../Component/Contact/Contact";
import Footer from "../../Component/Footer/Footer";
import "./HomePage.css";

const App = () => {
  return (
    <>
      <div className="nav-hero">
        <NavBar />
        <Hero />
      </div>
      <Bio />
      <About />
      <Project />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
