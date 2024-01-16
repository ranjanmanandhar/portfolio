import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import MenuLinks from "./MenuLinks";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [navBar, setNavBar] = useState(false);

  //for burger
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  //for fixed navbar on scroll
  const handleScroll = () => {
    setNavBar(window.scrollY >= 80);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div
        className={navBar ? "navbar active" : "navbar"}
        id={expandNavbar ? "open" : "close"}
      >
        <div className="toggleButton">
          <div className="sm-logo">
            <ul>
              <li>
                <Link to="/" smooth={true} offset={-100} duration={500}>
                  RM
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={() => setExpandNavbar((prev) => !prev)}>
            <ReorderIcon />
          </button>
        </div>
        <div className="logo">
          <ul>
            <li>
              <Link to="/" smooth={true} offset={-100} duration={500}>
                Ranjan Manandhar
              </Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <MenuLinks />
        </div>
      </div>
      <div className="menu-links">
        <MenuLinks />
      </div>
    </>
  );
}

export default Navbar;
