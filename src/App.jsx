/** @format */

import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Connect from "./components/Connect/Connect";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, [location]);

  return (
    <div>
      <section id="header">
        <Header />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="connect">
        <Connect />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
