import React from "react";
import "./ContactPage.css";
import Contact from "../../Component/Contact/Contact";
import NavBar from "../../Component/Nav bar/NavBar";
import Footer from "../../Component/Footer/Footer";

const contact = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
};

export default contact;
