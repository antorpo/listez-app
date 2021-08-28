import React from "react";
import iconListez from "../../assets/images/icono.png";
import { Portal } from "../Portal/Portal";
import "./styles.css";

export const Loader = ({ loading, divId }) => {
  if (!loading) {
    return null;
  }

  return (
    <Portal divId={divId}>
      <div className="spinner-container">
        <img className="icon" src={iconListez} alt="Icon ListezApp" />
        <div className="spinner">
          <div className="sk-chase ">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
