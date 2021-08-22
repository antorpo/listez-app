import React from "react";
import { createPortal } from "react-dom";
import iconListez from '../../assets/images/icono.png';
import "./styles.css";

const loaderRoot = document.getElementById("loader");

export const Loader = ({ loading }) => {
  if (!loading) {
    return null;
  }

  const jsx = (
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
  );

  return createPortal(jsx, loaderRoot);
};
