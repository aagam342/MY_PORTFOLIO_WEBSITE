import React from "react";
import "../Styles/Education.css";
const Education = () => {
  return (
    <div>
      <h2 className="headings">Education</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <h4>BACHELOR OF TECHNOLOGY WITH INFORMATION TECHNOLOGY</h4>
            </button>
          </h4>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h4>Indira Gandhi Government Engineering College, Sagar</h4>
              <h6>Information Technology | 2020-2024 | CGPA: 7.80</h6>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h4>HIGHER SECONDARY SCHOOL EDUCATION</h4>
            </button>
          </h4>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h4>Pearl Public Higher Secondary School, Sagar (M.P.)</h4>
              <h6>Science (PCM) | 2019-2020 | Grade: 88.4%</h6>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h4>HIGH SCHOOL EDUCATION</h4>
            </button>
          </h4>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h4>Pearl Public Higher Secondary School, Sagar (M.P.)</h4>
              <h6>General Curriculum | 2017-2018 | Grade: 89.2%</h6>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="achievements">
        <h3>Notable Achievements:</h3>
        
          <ul>
            <li>
              <p>TCS NQT Exam - Scored 100/100 (Coding), 74/100 (Aptitude,
              Reasoning, and Other)</p>
            </li>
            <li>
              <p>Secured 2nd Rank in a Bug Detect Competition, College Techfest,
              2023</p>
            </li>
          </ul>
        
      </div>
    </div>
  );
};

export default Education;
