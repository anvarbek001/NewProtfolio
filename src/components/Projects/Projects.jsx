/** @format */

import React from "react";
import styles from "./Projects.module.css";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "title1",
    image: "/images/crmlogin.png",
    description:"project1_desc",
    link: "/",
  },
  {
    id: 2,
    title: "title2",
    image: "/images/landing.png",
    description: "project2_desc",
    link: "https://stalwart-crepe-3d3416.netlify.app/",
  },
  {
    id: 3,
    title: "E-Commerce Web App",
    image: "/images/crm.png",
    description:"project3_desc",
    link: "/",
  },
];

const Projects = () => {
  const {t} = useTranslation();
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>{t('Projects')}</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={t(project.title)}
              className={styles.projectImage}
            />
            <h3>{t(project.title)}</h3>
            <p>{t(project.description)}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={styles.viewButton}>
              {t('wiew')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
