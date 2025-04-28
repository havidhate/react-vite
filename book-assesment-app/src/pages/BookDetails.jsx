import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  useEffect(() => {
    axios
      .get(`https://openlibrary.org${decodeURIComponent(id)}.json`)
      .then((r) => setBook(r.data));
  }, [id]);

  if (!book) return <p>Loading…</p>;
  return (
    <div className="details">
      <h1>{book.title}</h1>
      <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
      <pre>{book.description?.value || book.description}</pre>
    </div>
  );
}
