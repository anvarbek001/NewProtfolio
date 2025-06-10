/** @format */

import React from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
