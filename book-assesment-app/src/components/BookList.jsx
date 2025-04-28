import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books, listRef }) {
  return (
    <div className="book-list" ref={listRef}>
      {books.map((b, i) => (
        <BookCard key={b.key || i} book={b} index={i} />
      ))}
    </div>
  );
}
