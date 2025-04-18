import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    if (selected) {
      axios
        .get(`https://dummyjson.com/products/category/${selected}`)
        .then((res) => {
          setProducts(res.data.products);
        });
    }
  }, [selected]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Browse Categories</h2>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="">-- Select Category --</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
