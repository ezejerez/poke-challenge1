import React from "react";
import Logo from "../../public/img/PokeChallengeLogo.png";
import "./navbar.css";
import Searchbar from "../Searchbar";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <img src={Logo} alt="Logo" />
        <Searchbar />
      </div>
    </div>
  );
}
