import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const TAX_RATE = 0.1; // 10%

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    dispatch(updateQuantity({ id, quantity: qty }));
  };

  if (items.length === 0) {
    return (
      <p>
        Your cart is empty.{" "}
        <button onClick={() => navigate("/")}>Shop now</button>
      </p>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-page__list">
        {items.map((item) => (
          <li key={item.id} className="cart-page__item">
            <img src={item.image} alt={item.title} className="cart-page__img" />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleQtyChange(item.id, Number(e.target.value))
                }
              />
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-page__summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (10%): ${tax.toFixed(2)}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
