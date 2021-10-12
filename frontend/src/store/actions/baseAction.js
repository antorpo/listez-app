import { showAlert } from "../slices/securitySlice";

// Thunk-Function Creator
export const ejecutarConTry = (thunkFunction) => {
  return async (dispatch, getState) => {
    // Mostrar loading
    try {
      await thunkFunction(dispatch, getState);
      // Ocultar loading
    } catch (error) {
      console.log(error);
      dispatch(
        showAlert({
          open: true,
          type: "error",
          message: "Ha ocurrido un error!",
        })
      );
      // Aca hacer un dispatch de error y colocar una https://material-ui.com/es/components/snackbars/#customized-snackbars
      // que detecte si hay error y muestre una alerta siempre
    }
  };
};
