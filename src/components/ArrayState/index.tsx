import React, { useState } from "react";
import ChangeStatusAlert from "../changeStatusAlert";
import "./styles.css";

export const rawItems = [
  { id: 1, active: true },
  { id: 2, active: true },
  { id: 3, active: true },
  { id: 4, active: true },
  { id: 5, active: true },
  { id: 6, active: true },
  { id: 7, active: true },
  { id: 8, active: true },
  { id: 9, active: true },
  { id: 10, active: true },
  { id: 11, active: true },
  { id: 12, active: true },
  { id: 13, active: true },
  { id: 14, active: true },
];

export const ArrayState = () => {
  const [items, setItems] = useState(rawItems);

  const [showModal, setShowModal] = useState(false);
  const [reasonSelected, setReasonSelected] = useState<string>("");
  const [otherReasonText, setOtherReasonText] = useState("");
  const [productToUpdate, setProductToUpdate] = useState<{
    id: number;
    active: boolean;
  }>();

  const updateProductStatus = () => {
    console.log("reasonSelected", reasonSelected);
    const newItems = items.map((newItem) => {
      if (productToUpdate!.id === newItem.id) {
        return { ...newItem, active: !newItem.active };
      }
      return newItem;
    });
    setItems(newItems);
    closeModal();
  };

  const onChangeProductStatus = (item: { id: number; active: boolean }) => {
    setProductToUpdate(item);
    openModal();
  };

  const closeModal = () => {
    setReasonSelected("");
    setOtherReasonText("");
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="array-state-container">
      <ChangeStatusAlert
        showModal={showModal}
        updateProductStatus={updateProductStatus}
        closeModal={closeModal}
        reasonSelected={reasonSelected}
        setReasonSelected={setReasonSelected}
        otherReasonText={otherReasonText}
        setOtherReasonText={setOtherReasonText}
        productToUpdateIsActive={productToUpdate?.active!}
      />

      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => onChangeProductStatus(item)}
            className="array-state-item"
          >
            <div className="array-state-item-id">{item.id}</div>
            <div className="array-state-item-status">
              {item.active ? "Active " : "Inactive "}
              {item.active ? "🟢" : "🔴"}
            </div>
          </div>
        );
      })}
    </div>
  );
};
