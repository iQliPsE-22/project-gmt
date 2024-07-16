import React from "react";
import "./App.css";
import Caraousel from "./components/Caraousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Post from "./components/Post";
import { useUser } from "./userContext.js";
const App = () => {
  const { user } = useUser();
  return (
    <div className="inter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Caraousel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user && (
            <>
              <Route path="/login-successful" element={<Post />} />
              <Route path="/home" element={<Home />} />
            </>
          )}
          <Route
            path="*"
            element={<h1 className="text-4xl">404 Not Found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
