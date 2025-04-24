// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <h1>Helloe world</h1>
    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route
    //         path="/add"
    //         element={
    //           <PrivateRoute>
    //             <AddTask />
    //           </PrivateRoute>
    //         }
    //       />
    //       <Route
    //         path="/edit/:id"
    //         element={
    //           <PrivateRoute>
    //             <EditTask />
    //           </PrivateRoute>
    //         }
    //       />
    //     </Routes>
    //   </AuthProvider>
    // </Router>
  );
}

export default App;
