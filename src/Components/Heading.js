import React from "react";
import "../Styles/Heading.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="heading">
      <h1 className="heading-text">Portfolio</h1>
      <div className="icon-part">
        <a
          href="mailto:aagamj7229@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineMail className="icons email" />
        </a>
        <a
          href="https://github.com/aagam342"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="icons github" />
        </a>

        <a
          href="https://www.linkedin.com/in/aagam342"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="icons linkedin" />
        </a>
        <a
          href="https://twitter.com/aagam342"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icons twitter" />
        </a>
      </div>
    </div>
  );
};

export default Heading;
