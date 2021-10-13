import { showAlert } from "../slices/securitySlice";

// Thunk-Function Creator
export const ejecutarConTry = (thunkFunction) => {
  return async (dispatch, getState) => {
    // Mostrar loading
    try {
      const result = await thunkFunction(dispatch, getState);
      return result;
      // Ocultar loading
    } catch (error) {
      let mensajeError = error?.response?.data.mensaje||'Ha ocurrido un error!';
      console.log(error);
      dispatch(
        showAlert({
          open: true,
          type: "error",
          message: mensajeError,
        })
      );
      // Aca hacer un dispatch de error y colocar una https://material-ui.com/es/components/snackbars/#customized-snackbars
      // que detecte si hay error y muestre una alerta siempre
    }
  };
};
