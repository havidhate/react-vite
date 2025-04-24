import React, { useState } from "react";

const FilterSortControls = ({ onFilterChange, onSortChange }) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        Filter by Status:
        <select value={filter} onChange={handleFilter}>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>

      <label style={{ marginLeft: "1rem" }}>
        Sort by:
        <select value={sort} onChange={handleSort}>
          <option value="">None</option>
          <option value="priority">Priority</option>
          <option value="date">Date</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSortControls;
