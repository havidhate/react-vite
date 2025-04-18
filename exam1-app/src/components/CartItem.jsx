import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div style={styles.container}>
      <img src={item.thumbnail} alt={item.title} style={styles.img} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span style={{ margin: "0 1rem" }}>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          style={{ marginTop: "0.5rem" }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    alignItems: "center",
  },
  img: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
};

export default CartItem;
