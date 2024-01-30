import React from "react";
import { Link } from "react-scroll";

function MenuLinks() {
  return (
    <>
      <ul>
        <li>
          <Link to="profile" smooth={true} offset={-100} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={40} duration={500}>
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
    </>
  );
}

export default MenuLinks;
