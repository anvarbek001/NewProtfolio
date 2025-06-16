/** @format */

import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const texts = ["My Name is Anvar", "I'm Full Stack Developer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Anvarbek_CV.pdf";
    link.download = "Anvarbek_CV.pdf";
    link.click();
  };

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.body_text} data-aos="zoom-in-down">
          <h1
            className={`${styles.animated_text} ${
              fade ? styles.fade_in : styles.fade_out
            }`}>
            {texts[index]}
          </h1>
          <p data-aos="zoom-in-down">
            I am a Full Stack Developer with a deep passion for building
            high-performance and visually stunning web applications. I
            specialize in creating modern, responsive, and user-friendly
            websites with clean, well-structured code that is easy to maintain
            and scale. My goal is not just to write code, but to solve
            real-world problems through efficient digital solutions. I pay close
            attention to UI/UX design, ensuring that every website I build is
            both beautiful and functional across all devices.
          </p>

          <button
            className={styles.Download_button}
            onClick={handleDownload}
            data-aos="zoom-in-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512">
              <path
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                fill="white"></path>
            </svg>
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
