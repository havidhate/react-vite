import React, { useContext } from "react";
import { UserContext } from "./FuncProvider";

export const Navbar = () => {
  const { user, setAuth } = useContext(UserContext);
  return (
    <>
      <nav>
        <button onClick={setAuth}>auth:{user}</button>
      </nav>
    </>
  );
};
