import React, { useState } from "react";
import "./styles.css";

const rawItems = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
  { id: 4, active: false },
  { id: 5, active: true },
  { id: 6, active: false },
  { id: 7, active: true },
  { id: 8, active: false },
  { id: 9, active: true },
  { id: 10, active: false },
  { id: 11, active: false },
  { id: 12, active: false },
  { id: 13, active: false },
  { id: 14, active: false },
];

export const ArrayState = () => {
  const [items, setItems] = useState(rawItems);

  const toggleStatus = (item: { id: number; active: boolean }) => {
    const newItems = items.map((newItem) => {
      if (item.id === newItem.id) {
        return { ...newItem, active: !newItem.active };
      }
      return newItem;
    });
    setItems(newItems);
  };

  return (
    <div className="array-state-container">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => toggleStatus(item)}
            className="array-state-item"
          >
            <div className="array-state-item-id">{item.id}</div>
            <div className="array-state-item-status">
              {item.active ? "Active" : "Inactive"}
            </div>
          </div>
        );
      })}
    </div>
  );
};
