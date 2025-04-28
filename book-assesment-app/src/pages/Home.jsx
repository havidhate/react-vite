import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/bookSlice";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const { docs, total, loading } = useSelector((s) => s.books);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const listRef = useRef(null);

  // fetch on mount & when page or query changes
  useEffect(() => {
    dispatch(fetchBooks({ query, page }));
  }, [dispatch, query, page]);

  // sort docs by title (for binary search)
  const sorted = useMemo(
    () =>
      [...docs]
        .filter((b) => b.title)
        .sort((a, b) => a.title.localeCompare(b.title)),
    [docs]
  );

  // when search finds an index, scroll into view
  const scrollToIndex = (idx) => {
    const card = listRef.current.querySelectorAll(".book-card")[idx];
    if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="page">
      <SearchBar sorted={sorted} onSearch={setQuery} onFound={scrollToIndex} />
      {loading ? (
        <p>Loading…</p>
      ) : (
        <>
          <BookList books={sorted} listRef={listRef} />
          <Pagination
            total={total}
            page={page}
            perPage={10}
            onChange={setPage}
          />
        </>
      )}
    </div>
  );
}
