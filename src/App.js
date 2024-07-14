import React from "react";
import "./App.css";
import Caraousel from "./components/Caraousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
const App = () => {
  return (
    <div className = "inter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Caraousel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
