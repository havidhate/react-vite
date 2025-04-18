import React, { useState, useEffect } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");

  // Debouncing search input for performance optimization
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(query);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [query, setSearchQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for products..."
      />
    </div>
  );
};

export default SearchBar;
