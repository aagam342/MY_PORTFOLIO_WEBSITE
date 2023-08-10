import React from "react";
import "../Styles/Skills.css";
const Skills = () => {
  return (
    <div>
      <h2 className="headings">Skills</h2>
      <h3>Technical Skills</h3>

      <ul className="list-group">
        <li className="list-group-item ">
          Programming Languages - C, C++, Java, SQL
        </li>
        <li className="list-group-item " >
          Web Development - HTML, CSS, JavaScript, ReactJS, Bootstrap, jQuery
        </li>
        <li className="list-group-item ">
          Tools/ Platforms - Git, GitHub, Windows, VS Code, NetBeans
        </li>
        <li className="list-group-item ">
          Soft skills - problem-solving, adaptability, communication,
          collaboration and time management
        </li>
        <li className="list-group-item ">Language - English, Hindi</li>
      </ul>
    </div>
  );
};

export default Skills;
