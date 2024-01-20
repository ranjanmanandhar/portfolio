import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "../styles/Home.css";
import Contact from "./Contact";
import Profile from "./Profile";

function Home() {
  return (
    <div className="home" id="/">
      <Profile />
      <Contact />
    </div>
  );
}

export default Home;
