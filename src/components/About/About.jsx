/** @format */
import { Link } from "react-router-dom";
import abouts from "./About.module.css";
import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) {
        el.style.width = "0%";
        setTimeout(() => {
          el.style.transition = "width 2s ease";
          el.style.width = skillsData[i].percent + "%";
        }, 100); // delay for animation trigger
      }
    });
  }, []);

  return (
    <div>
      <div className={abouts.about_section}>
        <div className={abouts.skills_section}>
          <h2 className={abouts.section_title} data-aos="zoom-in-down">
            About Me
          </h2>
          <p className={abouts.section_subtitle}></p>
          <div className={abouts.skills_container}>
            <div className={abouts.bio}>
              <h3 data-aos="zoom-in-down">Hi There! I'm Anvarbek Ergashev</h3>
              <p data-aos="zoom-in-down">
                I'm a Laravel-focused full-stack developer with deep experience
                in building scalable, real-world web applications. I specialize
                in creating complex admin panels, large data exports (30,000+
                rows), dynamic CRUD systems, and smart automation tools. My work
                includes optimized Excel generation, task and attendance
                tracking, modal-based interfaces, and Telegram bots with survey
                logic and Excel export features. I strive to write clean,
                efficient code and build solutions that are not only functional
                but also user-friendly and maintainable.
              </p>
              <ul data-aos="zoom-in-down">
                <li>
                  <strong>Date of birth:</strong> 8 September 2001
                </li>
                <li>
                  <strong>Phone:</strong> +998 93 873 18 09
                </li>
                <li>
                  <strong>Email:</strong> ergashevanvarbek00700@gmail.com
                </li>
                <li>
                  <strong>Location:</strong> Uzbekistan,Jizzakh
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
