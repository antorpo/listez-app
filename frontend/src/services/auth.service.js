import axios from "axios";
import { APIBASE } from "./api";

export const login = async (userData, setAnswer) => {
  const response = await axios.post(`${APIBASE.endpoint}/user/login`, {
    ...userData
  });
  const userCredentials = await response.data;
  const {statusText} = await response;
  return {userCredentials, statusText};
};

export const register = async (user) => {
  const response = await axios.post(`${APIBASE.endpoint}/user/register`, {
    ...user,
  });
  const data = await response.data;
  return data;
};
