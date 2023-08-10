import React, { useState, useEffect, useMemo } from "react";
import "../Styles/Photo.css";
import frontPhoto from "../Images/Front_photo.JPG";

const Photo = () => {
  const headings = useMemo(
    () => ["HEY !<br /> I am AAGAM JAIN", "I AM A <br/> SOFTWARE DEVELOPER"],
    []
  );

  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headings]);

  const resumeUrl =
    "https://drive.google.com/file/d/1yS431peCSfRUri2x_RUdhFscet_2DZ1H/view?usp=sharing";

  const memoizedHeadings = useMemo(() => {
    return headings.map((heading, index) => (
      <h3
        key={index}
        className={`animated-heading ${
          index === currentHeadingIndex ? "active" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h3>
    ));
  }, [headings, currentHeadingIndex]);

  return (
    <div className="photo-section">
      <div className="photo">
        <img src={frontPhoto} alt="Me" />
        <div className="photo-heading">
          {memoizedHeadings}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <button className="resume-button btn btn-secondary">
              View Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photo;
