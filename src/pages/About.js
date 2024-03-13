import React from "react";
import "../styles/About.css";
import laravelLogo from "../assets/photos/logo/50px-Laravel.svg.png";
import jqueryLogo from "../assets/photos/logo/jquery-logo.png";
import javascriptLogo from "../assets/photos/logo/JavaScript-logo.png";
import rabbitmqLogo from "../assets/photos/logo/rabbitmq-logo-png-transparent.png";
import graphqlLogo from "../assets/photos/logo/GraphQL Logo (Rhodamine).png";
import phpLogo from "../assets/photos/logo/new-php-logo.png";
import restApiLogo from "../assets/photos/logo/rest-api.png";
import mysqlLogo from "../assets/photos/logo/logo-mysql-170x115.png";
import oracleLogo from "../assets/photos/logo/oracle-seeklogo.png";
import mongodbLogo from "../assets/photos/logo/MongoDB_ForestGreen.png";
import dockerLogo from "../assets/photos/logo/docker-mark-blue.png";
import gitLogo from "../assets/photos/logo/Git-Logo-1788C.png";
import gitlabLogo from "../assets/photos/logo/gitlab-logo-500.png";
import linuxLogo from "../assets/photos/logo/linux-22632.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-technical-skills">
          <h1>My Technical Skills</h1>
          <div className="technical-skills">
            <div className="technical-skills-images">
              <div id="small-img">
                <img src={laravelLogo}></img>
                <img src={jqueryLogo}></img>
                <img src={javascriptLogo}></img>
                <img src={rabbitmqLogo}></img>
              </div>
              <div id="small-img">
                <img src={graphqlLogo}></img>
                <img src={phpLogo}></img>
                <img src={restApiLogo}></img>
              </div>
              <h4>Language and Architecture</h4>
            </div>
            <div className="technical-skills-images">
              <img src = {mysqlLogo}></img>
              <img src = {oracleLogo}></img>
              <img src = {mongodbLogo}></img>
              <h4>Database</h4>
            </div>
            <div className="technical-skills-images">
              <div>
                <img src = {dockerLogo}></img>
                <img src = {gitLogo}></img>
                <img src = {gitlabLogo}></img>
              </div>
              <div>
                <img src = {linuxLogo}></img>
              </div>
              <h4>Devops</h4>
            </div>
          </div>
        </div>
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            I'm a full stack web developer with over 5 years of work experience from Kathmandu, Nepal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;