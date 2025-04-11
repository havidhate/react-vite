import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const inputRef = useRef(null); // Create a ref for the input element

  const handleClick = () => {
    inputRef.current.focus(); // Focus the input element when button is clicked
  };
  return (
    <div style={{ padding: "20px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
