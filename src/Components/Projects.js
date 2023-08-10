import React from "react";
import "../Styles/Projects.css";
const Projects = () => {
  return (
    <div>
      <h2 className="headings">Projects</h2>
      <div className="project">
        <h3>
          Project 1 :{" "}
          <a
            href="https://aagam342.github.io/To_Do_List_App_With_ReactJS/"
            target="blank"
            className="project-link"
          >
            To-Do React App
          </a>
        </h3>
        <p>
          <strong>Description</strong>: This app is a dynamic task management
          tool that enables users to efficiently organize, edit, and prioritize
          their to-do list, featuring real-time updates and user-friendly
          controls.
        </p>
        <p>
          <strong>Tech Stack</strong> : HTML, CSS , JavaScript, ReactJS
        </p>
      </div>
      <div className="project">
        <h3>
          Project 2 :{" "}
          <a
            href="https://aagam342.github.io/Calculator_App_With_ReactJS/"
            target="blank"
            className="project-link"
          >
            Calculator App
          </a>
        </h3>
        <p>
          <strong>Description</strong>: The calculator app provides a
          user-friendly interface to perform arithmetic calculations and
          displaying a history of previous calculations.
        </p>
        <p>
          <strong>Tech Stack</strong> : HTML, CSS , JavaScript, ReactJS
        </p>
      </div>
    </div>
  );
};

export default Projects;
