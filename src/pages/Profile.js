import React from "react";
import "../styles/Profile.css";
import myImage from "../assets/photos/profile.jpeg";
import { Link } from "react-scroll";
import { ReactSocialMediaIcons } from "react-social-media-icons";

function Profile() {
  return (
    <div className="profile" id="profile">
      <div className="profile-pic">
        <img src={myImage} />
      </div>
      <div className="profile-text">
        <div>
          <p>Hello I'm</p>
          <h1>Ranjan Manandhar</h1>
          <p>Full Stack Developer</p>
        </div>
        <div className="btn-contaier">
          <button className="btn btn-color-2">Download CV</button>
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
            url="https://some-website.com/my-social-media-url"
            size="30"
          />
          <ReactSocialMediaIcons
            borderColor="#FFFFFF"
            icon="github"
            url="https://some-website.com/my-social-media-url"
            size="30"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
