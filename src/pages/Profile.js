import React from "react";
import "../styles/Profile.css";
import myImage from "../assets/photos/profile.jpeg";
import { GitHub, LinkedIn } from "@mui/icons-material";

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
          <button className="btn btn-color-1">Download CV</button>
          <button className="btn btn-color-2">Download CV</button>
        </div>
        <div className="profile-link">
          <LinkedIn />
          <GitHub />
        </div>
      </div>
    </div>
  );
}

export default Profile;
