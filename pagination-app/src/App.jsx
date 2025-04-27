import React, { useState } from "react";
import PaginationControls from "./PaginationControls";

const data = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  title: `Task ${i + 1}`,
}));

function App() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📋 Paginated Task List</h2>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {item.title}
          </li>
        ))}
      </ul>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
