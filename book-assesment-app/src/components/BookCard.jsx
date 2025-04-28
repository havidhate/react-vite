import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  // book.key like "/works/OL123W"
  const id = encodeURIComponent(book.key);
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(", ")}</p>
      <Link to={`/book/${id}`}>Details →</Link>
    </div>
  );
}
