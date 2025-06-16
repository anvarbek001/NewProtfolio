/** @format */

import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import footer from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className={footer.footer}>
      <div className={footer.container}>
        <div className={footer.left}>
          <h2 className={footer.logo}>
            Anvar<span>Dev</span>
          </h2>
          <p className={footer.tagline}>
            {t('lets')}
          </p>
        </div>

        <div className={footer.social}>
          <h4 className={footer.socialTitle}>{t('follow')}</h4>
          <div className={footer.icons}>
            <a
              href="https://www.youtube.com/@Web_developer_frontEnd"
              target="_blank"
              rel="noopener noreferrer"
              className={footer.icon}>
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/anvar.codes/"
              target="_blank"
              rel="noopener noreferrer"
              className={footer.icon}>
              <FaInstagram />
            </a>
            <a
              href="https://github.com/anvarbek001"
              target="_blank"
              rel="noopener noreferrer"
              className={footer.icon}>
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anvarbek-ergashev-6b5619276/"
              target="_blank"
              rel="noopener noreferrer"
              className={footer.icon}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className={footer.right}>
          <p>© {new Date().getFullYear()} AnvarDev. {t('reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
