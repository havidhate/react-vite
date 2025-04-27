import React from "react";
import { useTimer } from "./useTimer";
import "./App.css";

function App() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Timer: {timer} sec</h2>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
export default App;
