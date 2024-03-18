import React from "react";
import "../styles/Home.css";
import Contact from "./Contact";
import Profile from "./Profile";
import About from "./About";
import Experience from "./Experience";
import MyWork from "./MyWork";

function Home() {
  return (
    <div className="home" id="/">
      <Profile />
      <About />
      <MyWork/>
      <Experience/>
    </div>
  );
}

export default Home;
