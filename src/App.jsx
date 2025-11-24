import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home Page/HomePage";
import ContactPage from "./Pages/Contact Page/ContactPage";
import ProjectPage from "./Pages/Project Page/ProjectPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
