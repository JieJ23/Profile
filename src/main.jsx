import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./Pages/Projects";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
