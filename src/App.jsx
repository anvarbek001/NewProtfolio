/** @format */

import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Skills/Projects";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh(); // sahifa o‘zgarganda AOS-ni yangilash
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
