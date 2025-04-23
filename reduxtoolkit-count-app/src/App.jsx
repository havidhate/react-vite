import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ textalign: "center", margingTop: "50px" }}>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())} disabled={count < 1}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
