import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
