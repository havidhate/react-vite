import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);

      const rel = await axios.get(
        `https://dummyjson.com/products/category/${res.data.category}`
      );
      setRelated(rel.data.products.filter((p) => p.id !== res.data.id));
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p>
        <b>Price:</b> ${product.price}
      </p>
      <p>
        <b>Rating:</b> ⭐ {product.rating}
      </p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <h3>Related Products</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
