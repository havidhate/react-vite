// src/main.jsx (or src/index.jsx)
import React from "react";
import ReactDOM from "react-dom/client"; // <-- note '/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App.jsx";
import { store } from "./app/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // <-- createRoot

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
