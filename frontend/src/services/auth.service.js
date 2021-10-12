import axios from "axios";
import { APIBASE } from "./api";

export const login = async (correo, password) => {
  const response = await axios.post(`${APIBASE.endpoint}/user/login`, {
    correo,
    password,
  });
  const data = await response.data;
  return data;
};

export const register = async (user) => {
  const response = await axios.post(`${APIBASE.endpoint}/user/register`, {
    ...user,
  });
  const data = await response.data;
  return data;
};
