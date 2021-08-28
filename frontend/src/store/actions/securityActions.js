import { ejecutarConTry } from "./baseAction";
import { showAlert, showModal } from "../slices/securitySlice";

export const mostrarAlerta = (alert) => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(
      showAlert({
        open: alert.open,
        type: alert.type,
        message: alert.message,
      })
    );
  });
};

export const mostrarModal = (modal) => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(showModal({
      open: modal.open,
      content: modal.content
    }));
  });
};
