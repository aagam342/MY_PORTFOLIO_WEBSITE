import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../Styles/Navbar.css";
import profilePic from "../Images/ProfilePic.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-photo">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="navbar-title">
        <div className="header__name">Aagam Jain</div>
        <div className="header__details">Aspiring Software Developer</div>
      </div>
      <div className="navbar-links">
        <ul className="navbar-list">
          <li>
            <Link to="#photo">HOME</Link>
          </li>
          <li>
            <Link to="#about">ABOUT</Link>
          </li>
          <li>
            <Link to="#education">EDUCATION</Link>
          </li>
          <li>
            <Link to="#skills">SKILLS</Link>
          </li>
          <li>
            <Link to="#projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="#certifications">CERTIFICATIONS</Link>
          </li>
          <li>
            <Link to="#coding-profiles">CODING PROFILES</Link>
          </li>{" "}
          <li>
            <Link to="#contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
