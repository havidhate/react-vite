import React, { useState, useEffect } from "react";

// The component that logs on mount and unmount
const LoggingComponent = () => {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#f0f0f0", marginTop: "20px" }}
    >
      <h3>I am the Logging Component</h3>
    </div>
  );
};

const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>React Mount/Unmount Example</h1>
      <button onClick={toggleComponent}>
        {showComponent ? "Hide Component" : "Show Component"}
      </button>

      {showComponent && <LoggingComponent />}
    </div>
  );
};

export default App;
