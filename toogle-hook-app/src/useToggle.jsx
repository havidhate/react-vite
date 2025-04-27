import React, { useState } from "react";

export function useToggle(initialArray, initialPosition = 0) {
  const [item, setItem] = useState(initialPosition);

  const itemToggle = () => {
    setItem((prev) => (prev + 1) % initialArray.length);
  };
  const currentItem = initialArray[item];
  return [currentItem, itemToggle];
}
