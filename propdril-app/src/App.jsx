import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState("hutesh");

  return (
    <>
      <Parent user={user} />
    </>
  );
}

function Parent({ user }) {
  return (
    <>
      <Child user={user} />
    </>
  );
}

function Child({ user }) {
  return (
    <>
      <GrandChild user={user} />
    </>
  );
}

function GrandChild({ user }) {
  return (
    <>
      <h1>user:{user}</h1>
    </>
  );
}
export default App;
