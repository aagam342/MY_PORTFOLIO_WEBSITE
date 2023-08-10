import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="headings">Contact</h2>
      <div className="contact-item">
        <p>
          Email : {""}
          <a
            href="mailto:aagamj7229@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            aagamj7229@gmail.com
          </a>
        </p>
      </div>
      <div className="contact-item">
        <p>Phone: +91-8359090305</p>
      </div>
      <div className="contact-item">
        <p>
          LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/in/aagam342"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/aagam342
          </a>
        </p>
      </div>
      <div className="contact-item">
        <p>
          Twitter : {""}
          <a
            href="https://twitter.com/aagam342"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter.com/aagam342
          </a>{" "}
        </p>
      </div>
      <div className="contact-item">
        <p>
          GitHub : {""}
          <a
            href="https://github.com/aagam342"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/aagam342
          </a>
        </p>
      </div>
      <div className="contact-item">
        <p>
          Whatsapp : {""}
          <a
            href="https://wa.me/+918359090305"
            target="_blank"
            rel="noopener noreferrer"
          >
            wa.me/+918359090305
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
