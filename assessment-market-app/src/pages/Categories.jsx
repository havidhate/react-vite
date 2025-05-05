import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../features/filters/filtersSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const current = useSelector((state) => state.filters.category);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  const handleSelect = (cat) => {
    dispatch(setCategory(cat));
    navigate("/"); // go back to Home where filter is applied
  };

  return (
    <div className="categories-page">
      <h2>Browse by Category</h2>
      <ul className="categories-page__list">
        <li
          key="all"
          className={current === "" ? "active" : ""}
          onClick={() => handleSelect("")}
        >
          All
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className={current === cat ? "active" : ""}
            onClick={() => handleSelect(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
