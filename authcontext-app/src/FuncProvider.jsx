import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const FuncProvider = ({ children }) => {
  const [user, setUser] = useState("logout");

  function setAuth() {
    setUser((prev) => (prev == "logout" ? "login" : "logout"));
  }

  return (
    <UserContext.Provider value={{ user, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};
