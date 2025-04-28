import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={dark ? "theme-dark" : "theme-light"}>{children}</div>
    </ThemeContext.Provider>
  );
}
