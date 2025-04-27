import React from "react";
import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  const [item, itemToggle] = useToggle(["A", "B", "C"], 0);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>item:{item}</h1>
        <button onClick={itemToggle}>Toggle</button>
      </div>
    </>
  );
}

export default App;
