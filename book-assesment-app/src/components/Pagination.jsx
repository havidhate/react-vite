import React from "react";

export default function Pagination({ total, perPage, page, onChange }) {
  const pages = Math.ceil(total / perPage);
  return (
    <div className="pagination">
      <button onClick={() => onChange(page - 1)} disabled={page === 1}>
        Prev
      </button>
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className={page === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => onChange(page + 1)} disabled={page === pages}>
        Next
      </button>
    </div>
  );
}
