import React from "react";
import { Portal } from "../Portal/Portal";
import "./styles.css";

export const Modal = ({ divId, open, closeModal, content }) => {
  if (!open) {
    return null;
  }

  return (
    <Portal divId={divId}>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="content">{content}</div>
        </div>
      </div>
    </Portal>
  );
};
