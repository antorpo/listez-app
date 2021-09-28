import React from "react";
import Modal, { useModal } from "../components/Modal";

export const ModalExample = () => {

    const { open, onToggle,onClose } = useModal();
    const handleClick=()=>{
        onToggle();
    }
    return(
        <div>
            <button onClick={handleClick}>Abrir modal</button>
            {open && (
                <Modal
                open={open}
                onClose={onClose}
                >
                  <div>loren</div>
                </Modal>
            )}
        </div>
    )

};
