import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const product = items.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProducts());
    }
  }, [items.length, dispatch]);

  if (loading || !product) {
    return <p>Loading product...</p>;
  }

  const related = items.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.title}
        className="product-detail__img"
      />
      <div className="product-detail__info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>
          Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
        </p>
        <h3>${product.price.toFixed(2)}</h3>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
        <Link to="/cart">Go to Cart</Link>
      </div>

      {related.length > 0 && (
        <section className="product-detail__related">
          <h3>Related Products</h3>
          <ul>
            {related.slice(0, 4).map((r) => (
              <li key={r.id}>
                <Link to={`/product/${r.id}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
