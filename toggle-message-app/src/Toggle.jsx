import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        message: state.message == "" ? "Hello world" : "",
      };
    default:
      return state;
  }
}

export function Toggle() {
  const [state, dispatch] = useReducer(reducer, { message: "" });
  return (
    <>
      <h1>{state.message}</h1>
      <button onClick={() => dispatch({ type: "toggle" })}>
        Toggle Message
      </button>
    </>
  );
}
