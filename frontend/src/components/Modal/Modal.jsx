/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Portal } from "../Portal/Portal";
import {useState,useCallback} from "react"
import {  } from "./Modal.styles";

export function useModal() {
    const [open, setOpen] = useState(false);

    const onClose = useCallback(() => {
        setOpen(false);
      }, [setOpen]);

    return{
        open,
        onClose
    }
}

const Modal = ({open, children }) => {
  return (
    <Portal >
        {open &&(
            <div>"hh</div>
        )}
        {children}
    </Portal>
  );
};

export default Modal
