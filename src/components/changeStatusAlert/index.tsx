import "./styles.css";
import image from "../../img/logo_head_tada.png";
import { useState } from "react";

const deactivateReasons = {
  stockout: "FALTA DE STOCK",
  coldout: "FALTA DE FRíO",
  expiration: "PRODUCTO BLOQUEADO POR VENCIMIENTO (7 días)",
  other: "Otro (ingrese un motivo)",
};

interface Props {
  showModal: boolean;
  closeModal: () => void;
  updateProductStatus: () => void;
  reasonSelected: string;
  setReasonSelected: (reason: string) => void;
  otherReasonText: string;
  setOtherReasonText: (text: string) => void;
  productToUpdateIsActive: boolean;
}

const ChangeStatusAlert = ({
  showModal,
  closeModal,
  reasonSelected,
  setReasonSelected,
  updateProductStatus,
  otherReasonText,
  setOtherReasonText,
  productToUpdateIsActive,
}: Props) => {
  const [showReasonWarning, setShowReasonWarning] = useState(false);
  const reasonsToDeactivate = Object.values(deactivateReasons);

  const onUpdateProduct = () => {
    if (reasonIsChosen() || !productToUpdateIsActive) {
      setShowReasonWarning(false);
      return updateProductStatus();
    }
    return setShowReasonWarning(true);
  };

  const onCancelUpdateProduct = () => {
    setShowReasonWarning(false);
    closeModal();
  };

  const reasonIsChosen = () => {
    if (reasonSelected === deactivateReasons.other) {
      return otherReasonText.length > 0;
    }
    return reasonSelected.length > 0;
  };

  const changeOtherReasonText = (e: any) => {
    if (reasonSelected === deactivateReasons.other) {
      setOtherReasonText(e.target.value);
    }
  };

  const availableText = () => {
    if (productToUpdateIsActive) {
      return <span className="no-available-text"> No Disponible</span>;
    }
    return <span className="available-text"> Disponible</span>;
  };

  if (!showModal) {
    return null;
  }
  console.log("reasonSelected", reasonSelected);
  const reasonsForm = (
    <form className="reasons-form">
      <h2 className="insert-reason">INGRESE UN MOTIVO</h2>
      {reasonsToDeactivate.map((reason) => (
        <div className="reason-container">
          <input
            name="reason"
            id={reason}
            type="radio"
            className="reason-input"
            onChange={() => setReasonSelected(reason)}
            checked={reasonSelected.includes(reason)}
          />
          <label htmlFor={reason}>{reason}</label>
        </div>
      ))}
      <textarea
        ref={(input) => {
          if (input && reasonSelected === deactivateReasons.other) {
            input.focus();
          }
        }}
        value={otherReasonText}
        onChange={changeOtherReasonText}
        placeholder="Escriba el motivo"
        className="reason-textarea"
      />
    </form>
  );

  return (
    <div className="modal-container">
      <div className="modal">
        <img src={image} alt="alert" className="modal-image" />
        <p className="title-first-part">Querés cambiar el estado</p>
        <p>del producto a: {availableText()}?</p>
        {productToUpdateIsActive && reasonsForm}
        {showReasonWarning && (
          <p className="choose-reason-warning">Debe ingresar un motivo</p>
        )}
        <div className="buttons-container">
          <button
            type="button"
            className="update-button"
            onClick={onUpdateProduct}
          >
            Actualizar
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancelUpdateProduct}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChangeStatusAlert;
