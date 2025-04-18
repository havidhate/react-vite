import { useState } from "react";
import "./App.css";
import { Toggle } from "./Toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toggle />
    </>
  );
}

export default App;
