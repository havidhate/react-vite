import React, { useContext } from "react";
import { UserContext } from "./FuncProvider";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer>
      <h1>message:{user == "login" ? "Welcome to page" : "Please login"}</h1>
    </footer>
  );
};
