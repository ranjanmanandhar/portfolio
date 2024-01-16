import React from "react";
import "../styles/Contact.css";
import { Email, LinkedIn } from "@mui/icons-material";

function Contact() {
  return (
    <div className="contact" id="contact">
      <p>Get in touch</p>
      <h1>Contact Me</h1>
      <div className="upper-container">
        <div className="info-container">
          <Email />
          <p>ranjan.mndr@gmail.com</p>
        </div>
        <div className="info-container">
          <LinkedIn />
          <p>Ranjan Manandhar</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
