import { ejecutarConTry } from "./baseAction";
import { showAlert } from "../slices/securitySlice";

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

