import React, { useRef } from "react";

const Focus = () => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // Allow only digits

    e.target.value = value; // Set value explicitly

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {[0, 1, 2, 3].map((i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          ref={(el) => (inputsRef.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "24px",
            textAlign: "center",
          }}
        />
      ))}
    </div>
  );
};

export default Focus;
