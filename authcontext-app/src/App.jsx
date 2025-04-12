import { useState } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Mainauth } from "./Mainauth";
import { Footer } from "./Footer";
import { FuncProvider } from "./FuncProvider";

function App() {
  return (
    <>
      <FuncProvider>
        <Navbar />
        <Mainauth />
        <Footer />
      </FuncProvider>
    </>
  );
}

export default App;
