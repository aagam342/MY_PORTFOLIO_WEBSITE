import React from "react";
import "../Styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "Java In-Depth: Become a Complete Java Engineer!",
      link: "https://drive.google.com/uc?export=view&id=1XCON2MtaNhpgXRZ7fWRhDK6TvLMzQ34C",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      link: "https://drive.google.com/uc?export=view&id=1ETfp2s7VJk8qscrmkM57z1OEPo85d5Qb",
    },
    {
      title: "C++ Programming Essentials Bootcamp",
      link: "https://drive.google.com/uc?export=view&id=1S_huI6fWDvrOZMFWlpe74IPYFWC282Mw",
    },
    {
      title: "Front End Development - HTML",
      link: "https://drive.google.com/uc?export=view&id=1ToeAb2IXt2N9ANu_daRB992NxKBqLhoR",
    },
    {
      title: "Front End Development - CSS",
      link: "https://drive.google.com/uc?export=view&id=1rtlkONKlTNtamlHspViyyZOhqnop4prM",
    },
    {
      title: "Introduction to JavaScript",
      link: "https://drive.google.com/uc?export=view&id=1xvCMPg171RKWqnXhtD7IMjAwNYO2ajkn",
    },
  ];

  return (
    <div>
      <h2 className="headings">Certifications and Trainings</h2>
      <div className="certificate-section">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="6"
              aria-label="Slide 1"
            ></button>
          </div>
          <div className="carousel-inner">
            {certifications.map((certificate, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""} `}>
                
                <div>
                  <img src={certificate.link} className="d-block w-100" alt="..." />
                </div>
                <div>
                  <h5 className="carousel-item-title">{certificate.title}</h5>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
