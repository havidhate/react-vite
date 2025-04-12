import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </>
  );
}
