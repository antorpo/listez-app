import { ejecutarConTry } from "./baseAction";
import { getCourses } from "../slices/coursesSlice";
import { showAlert } from "../slices/securitySlice";

export const obtenerCursos = () => {
  return ejecutarConTry(async (dispatch, getState) => {
    const cursosEjemplo = ["Matematicas", "Fisica", "Calculo"];
    dispatch(getCourses(cursosEjemplo));
  });
};

export const generarError = () => {
  return ejecutarConTry(async (dispatch, getState) => {
    throw Error("Algo ocurrio mal");
  });
};

export const generarAlerta = (mensaje) => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(
      showAlert({
        open: true,
        type: "success",
        message: mensaje,
      })
    );
  });
};
