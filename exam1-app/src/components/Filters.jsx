import React, { useEffect, useState } from "react";
import axios from "axios";

const Filters = ({ filters, setFilters }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filters">
      <h3>Filters</h3>

      {/* Category Filter */}
      <div>
        <label>Category:</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label>Min Price:</label>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Max Price:</label>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>

      {/* Rating Filter */}
      <div>
        <label>Rating:</label>
        <select name="rating" value={filters.rating} onChange={handleChange}>
          <option value="">All</option>
          <option value="4.5">4.5 & above</option>
          <option value="4">4 & above</option>
          <option value="3.5">3.5 & above</option>
          <option value="3">3 & above</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
