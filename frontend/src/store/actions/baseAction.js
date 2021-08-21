export class BaseAction {
  ejecutarConTry(thunkAction) {
    return async (dispatch, getState) => {
      try {
        await thunkAction(dispatch, getState);
        return true;
      } catch (err) {
        console.error("Manejador errores: " + err);
      }
    };
  }
}
