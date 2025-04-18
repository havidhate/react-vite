import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return {
        count: state.count + 1,
      };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function Count() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button
        onClick={() => dispatch({ type: "decrease" })}
        disabled={state.count < 1}
      >
        Decrease
      </button>
    </>
  );
}
