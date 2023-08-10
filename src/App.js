import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Heading from "./Components/Heading";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certifications";
import CodingProfiles from "./Components/CodingProfiles";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Photo from "./Components/Photo";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Heading />
        <div className="main-container">
          <Navbar />
          {/* <Content /> */}
          <div className="content-container">
            <div className="component" id="photo">
              <Photo />
            </div>
            <div className="component" id="about">
              <About />
            </div>
            <div className="component" id="education">
              <Education />
            </div>
            <div className="component" id="skills">
              <Skills />
            </div>
            <div className="component" id="projects">
              <Projects />
            </div>
            <div className="component" id="certifications">
              <Certifications />
            </div>
            <div className="component" id="coding-profiles">
              <CodingProfiles />
            </div>
            <div className="component" id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
