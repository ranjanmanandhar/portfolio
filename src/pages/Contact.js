import React from "react";
import "../styles/Contact.css";
import { ReactSocialMediaIcons } from "react-social-media-icons";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="upper-container">
        <div className="info-container">
          <ReactSocialMediaIcons
            icon="mail"
            url="https://some-website.com/my-social-media-url"
            size="30"
          />
          <p>ranjan.mndr@gmail.com</p>
        </div>
        <div className="info-container">
          <ReactSocialMediaIcons
            borderColor="#FFFFFF"
            icon="linkedin"
            url="https://some-website.com/my-social-media-url"
            size="30"
          />
          <p>Ranjan Manandhar</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
