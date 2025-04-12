import React, { useContext } from "react";
import { UserContext } from "./FuncProvider";

export const Mainauth = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Your are successfully {user}</h1>
    </>
  );
};
