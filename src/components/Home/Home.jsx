/** @format */

import "./Home.css";
import logo from "../../assets/logo_icon.png";
import homeImg from '../../assets/home_img.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="header">
        <div className="icons">
          <img src={logo} alt="IMG" />
          <h1>
            Anvar<span style={{ color: "#38bdf8" }}>Dev</span>
          </h1>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={`pages ${menuOpen ? "show" : ""}`}>
          <Link to="/">
            <a href="#home">Home</a>
          </Link>
          <Link to={"/about"}>
            <a href="#about">About</a>
          </Link>
          <Link to={"/skills"}>
            <a href="#skills">Skills</a>
          </Link>
          <Link to={"/projects"}>
            <a href="#projects">Projects</a>
          </Link>
        </div>
      </div>
      <div className="body">
        <div className="body-text">
          <h1>My name is Anvar</h1>
          <p>
            I am a front-end developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.I can provide clean code and pixel perfect design. I also
            make website more & more interactive with web animations.I can
            provide clean code and pixel perfect design. I also make website
            more & more interactive with web animations.
          </p>
          <button>Download CV</button>
        </div>
        <div className="body-img">
          <img src={homeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
