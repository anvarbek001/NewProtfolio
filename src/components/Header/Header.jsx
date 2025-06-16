/** @format */
import logo from "../../assets/logo_icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import header from "./Header.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={header.header}>
      <div className={header.icons}>
        <img src={logo} alt="IMG" />
        <h1>
          Anvar<span style={{ color: "#38bdf8" }}>Dev</span>
        </h1>
      </div>

      <div className={header.langSelectWrapper}>
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className={header.langSelect}>
          <option value="uz">🇺🇿 O‘zbekcha</option>
          <option value="en">🇬🇧 English</option>
        </select>
      </div>

      <div className={header.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <div className={`${header.pages} ${menuOpen ? header.show : ""}`}>
        <a href="#home">{t("home")}</a>
        <a href="#about">{t("about")}</a>
        <a href="#projects">{t("projects")}</a>
        <a href="#connect">{t("connect")}</a>
      </div>
    </div>
  );
};

export default Header;
