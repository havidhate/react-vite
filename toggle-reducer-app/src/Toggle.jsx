import { useReducer, useEffect } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

export function Toggle() {
  const [state, dispatch] = useReducer(reducer, { theme: "light" });

  useEffect(() => {
    // remove old theme classes and apply new one to <body>
    document.body.className = "";
    document.body.classList.add(state.theme);
  }, [state.theme]);

  return (
    <div className="container">
      <button
        onClick={() => dispatch({ type: "toggle" })}
        className="toggle-btn"
      >
        Toggle Theme (Current: {state.theme})
      </button>
      <h1>Hello, Theme!</h1>
      <p>This entire page will change with theme.</p>
    </div>
  );
}
