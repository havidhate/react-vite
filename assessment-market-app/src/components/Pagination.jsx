// src/components/Pagination.js
import React from "react";

const Pagination = ({ total, perPage, current, onChange }) => {
  const totalPages = Math.ceil(total / perPage);
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);

  return (
    <nav className="pagination" aria-label="Product list pagination">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="pagination__btn"
        aria-label="Previous page"
      >
        ← Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`pagination__page ${
            page === current ? "pagination__page--active" : ""
          }`}
          aria-current={page === current ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === totalPages}
        className="pagination__btn"
        aria-label="Next page"
      >
        Next →
      </button>
    </nav>
  );
};

export default Pagination;
