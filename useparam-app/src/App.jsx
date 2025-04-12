import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import UserDetail from "./UserDetail";

function App() {
  return (
    <div>
      <h1>Users App</h1>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
