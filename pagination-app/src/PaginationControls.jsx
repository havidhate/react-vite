simport React from "react";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: "20px" }}>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            margin: "0 5px",
            padding: "6px 12px",
            backgroundColor: currentPage === page ? "#007bff" : "#e0e0e0",
            color: currentPage === page ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;
