import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        Tech Marketplace
      </Link>
      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    background: "#333",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
};

export default Header;
