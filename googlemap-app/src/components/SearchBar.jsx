import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Search triggered for: ${query}`);
    // Later we'll connect this with Mapbox's Geocoding API
  };

  return (
    <div style={{ margin: "10px" }}>
      <input
        type="text"
        placeholder="Search location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
