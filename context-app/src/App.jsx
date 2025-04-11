import React, { useContext } from "react";
import "./App.css";
import { ThemeProvider, ThemeContext } from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ToggleTheme />
      <ThemedBox />
    </ThemeProvider>
  );
}

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Theme is: {theme} (Click to toggle)</button>
  );
}

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    width: "200px",
    height: "100px",
    margin: "20px auto",
    textAlign: "center",
    padding: "20px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    borderRadius: "8px",
  };

  return <div style={styles}>This box changes with theme</div>;
}

export default App;
