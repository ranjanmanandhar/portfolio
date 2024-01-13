import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleScroll = () => {
    setNavBar(window.scrollY >= 80);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={navBar ? "navbar active" : "navbar"}
      id={expandNavbar ? "open" : "close"}
    >
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="logo">Ranjan Manandhar</div>
      <div className="links">
        <ul>
          <li>
            <Link to="/" smooth={true} offset={40} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="experiences" smooth={true} offset={40} duration={500}>
              Experiences
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} offset={40} duration={500}>
              Project
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={40} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* <Link to="/" smooth={true} offset={40} duration={500}>
          Home
        </Link>

        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
