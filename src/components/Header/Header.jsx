/** @format */
import logo from "../../assets/logo_icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import header from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={header.header}>
      <div className={header.icons}>
        <img src={logo} alt="IMG" />
        <h1>
          Anvar<span style={{ color: "#38bdf8" }}>Dev</span>
        </h1>
      </div>

      <div className={header.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <div className={`${header.pages} ${menuOpen ? header.show : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#connect">Connect</a>
      </div>
    </div>
  );
};

export default Header;
