/** @format */

import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Admin Panel CRM",
    image: "/images/crmlogin.png",
    description:
      "Laravel & React asosida yaratilgan CRM tizimi. CRUD, grafiklar, statistikalar mavjud.",
    link: "/",
  },
  {
    id: 2,
    title: "Telegram Bot",
    image: "/images/landing.png",
    description: "CRM uchun langin page.",
    link: "https://stalwart-crepe-3d3416.netlify.app/",
  },
  {
    id: 3,
    title: "E-Commerce Web App",
    image: "/images/crm.png",
    description:
      "To‘liq ishlab chiqilgan onlayn do‘kon: mahsulotlar, savatcha, to‘lovlar.",
    link: "/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={styles.viewButton}>
              Ko‘rish
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
