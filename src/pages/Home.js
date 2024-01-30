import React from "react";
import "../styles/Home.css";
import Contact from "./Contact";
import Profile from "./Profile";
import About from "./About";

function Home() {
  return (
    <div className="home" id="/">
      <Profile />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
