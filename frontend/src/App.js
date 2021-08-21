import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Prueba } from "./containers/";
import { Alert } from "./components/";
import { showAlert } from "./store/slices/securitySlice";

export const App = () => {
  const state = useSelector((state) => state);
  const alerta = useSelector((state) => state.security.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Estado app:", state);
  });

  const handleCloseAlert = () => {
    dispatch(showAlert({ ...alerta, open: false }));
  };

  return (
    <>
      <Alert
        open={alerta.open}
        type={alerta.type}
        message={alerta.message}
        handleClose={handleCloseAlert}
      />
      <h1>App Funcionando</h1>
      <Prueba />
    </>
  );
};
