import { ejecutarConTry } from "./baseAction";
import { showAlert, loginUser } from "../slices/securitySlice";
import { login, register } from "../../services/auth.service";
import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";

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

function useLogin() {
  const [answerStatus, setAnswerStatus] = useState();
  const dispatch = useDispatch();

  const loggearUsuario = (userData) => {
    return ejecutarConTry(async (dispatch, getState) => {
      const userCredentials = await login(userData,);
      setAnswerStatus(userCredentials);
      //dispatch(loginUser(userCredentials));
    });
  };
  
  const logginUser=(values)=>dispatch(loggearUsuario(values))
  return{
    logginUser,
    answerStatus
  }
}

export default useLogin


export const loggearUsuario = (userData) => {
  return ejecutarConTry(async (dispatch, getState) => {
    const data = await login(userData);
    dispatch(loginUser(data.userCredentials));
    return data
  });
}; 

export const registrarUsuario = (user) => {
  return ejecutarConTry(async (dispatch, getState) => {
    const respuesta = await register(user);
    console.log(respuesta);
  });
};

/*export const loggearUsuario = (userData) => {
  return ejecutarConTry(async (dispatch, getState) => {
    return login(userData).then(response=>{
        dispatch(loginUser(userCredentials))
        return response
      }
    );
  });
}; */