// src/components/ProductCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
        <h3 className="product-card__title">{product.title}</h3>
      </Link>

      <div className="product-card__info">
        <span className="product-card__price">${product.price.toFixed(2)}</span>
        <button onClick={handleAddToCart} className="product-card__add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
