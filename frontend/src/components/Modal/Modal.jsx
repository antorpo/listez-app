/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Portal } from "../Portal/Portal";
import { Button } from "../index";
import {useState,useCallback} from "react"
import { ModalStyled,containerCss, closeButtonCss } from "./Modal.styles"

export function useModal() {
    const [open, setOpen] = useState(false);

    const onToggle = useCallback(() => {
      setOpen((prev) => !prev);
    }, [setOpen]);

    const onOpen = useCallback(() => {
      setOpen(true);
    }, [setOpen]);

    const onClose = useCallback(() => {
        setOpen(false);
      }, [setOpen]);

    return{
        open,
        onClose,
        onToggle,
        onOpen
    }
}

const Modal = ({open, children,onClose }) => {

  function handlerClickClose(event) {
    event.stopPropagation();
    onClose(event);
  }
  
  return (
    <Portal >
        {open && (
          <ModalStyled
            open={open}
          >
            <div css={containerCss}>
              {children}
              {onClose && (
                <Button
                  type="button"
                  onClick={handlerClickClose}
                  css={closeButtonCss}
                  aria-label="cerrar"
                >
                  X
                </Button>
              )}
            </div>
          </ModalStyled>
        )}
    </Portal>
  );
};

export default Modal
