import React from "react";
import "../styles/Footer.css";
import MenuLinks from "./MenuLinks";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <MenuLinks />
      </div>
      <p>Copyright &copy; 2024 Ranjan Manandhar. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
