import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "../styles/Home.css";
import Contact from "./Contact";
import Profile from "./Profile";
import Experience from "./Experience";

function Home() {
  return (
    // <div className="home" id="/">
    //   <div className="about">
    //     <h2> Hi, my name is Ranjan</h2>
    //     <div className="promt">
    //       <p>A Software Engineer with a apassion for learning and creating s</p>
    //       <Email />
    //       <LinkedIn />
    //       <GitHub />
    //     </div>
    //   </div>
    //   <div className="skills">
    //     <h1>Skills</h1>
    //     <ol className="list">
    //       <li className="item">
    //         <h2>FrontEnd</h2>
    //         <span>HTML, CSS, JS, REACTJS, VUEJS</span>
    //       </li>
    //       <li className="item">
    //         <h2>Backend</h2>
    //         <span>
    //           GO, PHP, NODEJS, GRAPHQL, MONGODB, MYSQL, POSTGRESQL, REDIS
    //         </span>
    //       </li>
    //       <li className="item">
    //         <h2>Languages</h2>
    //         <span>ENGILIS, NEPALI, NEWARI</span>
    //       </li>
    //     </ol>
    //   </div>
    // </div>
    <>
      <Profile />
      <Experience/>
      <Contact />
    </>
  );
}

export default Home;
