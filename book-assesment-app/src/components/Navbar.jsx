import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggle } = useTheme();
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <button onClick={toggle}>{dark ? "Light Mode" : "Dark Mode"}</button>
    </nav>
  );
}
