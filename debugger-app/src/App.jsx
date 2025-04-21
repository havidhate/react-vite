import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import UploadPage from "./components/UploadPage";
import LogTable from "./components/LogTable";
import SearchView from "./components/SearchView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/logs" element={<LogTable />} />
        <Route path="/search/:devId" element={<SearchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
