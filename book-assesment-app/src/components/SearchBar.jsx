import React, { useRef } from "react";

export default function SearchBar({ sorted, onSearch, onFound }) {
  const inp = useRef();

  const handle = () => {
    const q = inp.current.value.trim().toLowerCase();
    onSearch(q); // triggers new fetch
    // binary search in sorted[]
    let lo = 0,
      hi = sorted.length - 1;
    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      let title = sorted[mid].title.toLowerCase();
      if (title === q) {
        onFound(mid);
        return;
      }
      if (title < q) lo = mid + 1;
      else hi = mid - 1;
    }
    alert("Not found");
  };

  return (
    <div className="search-bar">
      <input ref={inp} placeholder="Search title…" />
      <button onClick={handle}>Search</button>
    </div>
  );
}
