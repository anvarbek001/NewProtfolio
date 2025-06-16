/** @format */
import { Link } from "react-router-dom";
import abouts from "./About.module.css";
import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
const skillsData = [
  { name: "HTML", percent: 80 },
  { name: "CSS", percent: 80 },
  { name: "Bootstrap", percent: 80 },
  { name: "Java Script", percent: 75 },
  { name: "ReactJs", percent: 75 },
  { name: "Material UI", percent: 65 },
  { name: "Figma", percent: 77 },
  { name: "PHP", percent: 65 },
  { name: "Laravel", percent: 80 },
];
const About = () => {
  const refs = useRef([]);
  const {t} = useTranslation();

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) {
        el.style.width = "0%";
        setTimeout(() => {
          el.style.transition = "width 2s ease";
          el.style.width = skillsData[i].percent + "%";
        }, 100);
      }
    });
  }, []);

  return (
    <div>
      <div className={abouts.about_section}>
        <div className={abouts.skills_section}>
          <h2 className={abouts.section_title} data-aos="zoom-in-down">
            {t('haqida')}
          </h2>
          <p className={abouts.section_subtitle}></p>
          <div className={abouts.skills_container}>
            <div className={abouts.bio}>
              <h3 data-aos="zoom-in-down">{t('Iam')}</h3>
              <p data-aos="zoom-in-down">
                {t('aboutdesc')}
              </p>
              <ul data-aos="zoom-in-down">
                <li>
                  <strong>{t('date')}</strong> 8 {t('september')} 2001
                </li>
                <li>
                  <strong>{t('Phone')}:</strong> +998 93 873 18 09
                </li>
                <li>
                  <strong>Email:</strong> ergashevanvarbek00700@gmail.com
                </li>
                <li>
                  <strong>{t('Location')}:</strong> Uzbekistan,Jizzakh
                </li>
              </ul>
            </div>
            <div className={abouts.skills} data-aos="zoom-in-down">
              {skillsData.map((skill, i) => (
                <div key={i} className={abouts.skill}>
                  <div className={abouts.skill_title}>
                    {skill.name}
                    <span>{skill.percent}%</span>
                  </div>
                  <div className={abouts.skill_bar}>
                    <div
                      className={abouts.skill_fill}
                      ref={(el) => (refs.current[i] = el)}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
