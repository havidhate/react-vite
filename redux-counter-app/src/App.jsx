import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state); // Access entire state

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter App</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>Stringified State:</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
