import React from "react";
import "../styles/Profile.css";
import myImage from "../assets/photos/profile.jpeg";
import { Link } from "react-scroll";
import { ReactSocialMediaIcons } from "react-social-media-icons";
import CV from "../../src/assets/files/Ranjan.pdf";

function Profile() {
  return (
    <div className="profile" id="profile">
      <div className="profile-bg">
        <div className="profile-pic">
          <img src={myImage} />
        </div>
      </div>
      <div className="profile-div">
        <div className="profile-text">
          <p>Hello I'm</p>
          <h1>Ranjan Manandhar</h1>
          <p>Full Stack Developer</p>
        </div>
        <div className="btn-contaier">
          <a href={CV} download="Ranjan.pdf" target="_blank">
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <button className="btn btn-color-1">
            <Link to="contact" smooth={true} offset={40} duration={500}>
              Contact Info
            </Link>
          </button>
        </div>
        <div className="profile-link">
          <ReactSocialMediaIcons
            borderColor="#FFFFFF"
            icon="linkedin"
            url="https://www.linkedin.com/in/ranjan-manandhar-39554a186/"
            size="30"
          />
          <ReactSocialMediaIcons
            borderColor="#FFFFFF"
            icon="github"
            url="https://github.com/ranjanmanandhar"
            size="30"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
