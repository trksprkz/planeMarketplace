import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Planes from  "../components/Planes";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planes" element={<Planes />} />    </Routes>
  </Router>
);
