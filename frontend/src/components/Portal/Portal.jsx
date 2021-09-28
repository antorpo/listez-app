import ReactDOM from "react-dom";

export const Portal = ({ children, selector="#portals" }) => {
  return ReactDOM.createPortal(children, document.querySelector(selector));
};
