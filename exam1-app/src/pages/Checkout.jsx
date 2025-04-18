import React, { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Checkout successful!");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={form.zip}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
