import { ejecutarConTry } from "./baseAction";
import { showAlert, loginUser } from "../slices/securitySlice";
import { login, register } from "../../services/auth.service";

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

export const loggearUsuario = (correo, password) => {
  return ejecutarConTry(async (dispatch, getState) => {
    const userCredentials = await login(correo, password);
    console.log(userCredentials);

    dispatch(loginUser(userCredentials));
  });
};

export const registrarUsuario = (user) => {
  return ejecutarConTry(async (dispatch, getState) => {
    const respuesta = await register(user);
    console.log(respuesta);
  });
};
