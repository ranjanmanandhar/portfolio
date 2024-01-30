import React from "react";
import "../styles/About.css";
import myImage from "../assets/photos/profile.jpeg";

function About() {
  return (
    <div className="about" id="about">
      <p>Get to know more</p>
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-pic">
          <img src={myImage} />
        </div>
        <div className="about-text">
          <div>test</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
