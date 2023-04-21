import React, { useState } from "react";
import { rawItems } from "../components/ArrayState";
import ChangeStatusAlert from "../components/changeStatusAlert";

const ChangeStatusScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [reasonSelected, setReasonSelected] = useState<string>("");
  const [otherReasonText, setOtherReasonText] = useState("");
  const [productToUpdate, setProductToUpdate] = useState<{
    id: number;
    active: boolean;
  }>();
  const [products, setProducts] =
    useState<{ id: number; active: boolean }[]>(rawItems);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const updateProductStatus = () => {
    closeModal();
  };

  return (
    <div className="demo-container">
      <h1>Status: {products[0].active}</h1>
      <button onClick={openModal}>Change status</button>

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
    </div>
  );
};

export default ChangeStatusScreen;
