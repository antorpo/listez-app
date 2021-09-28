/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import login from "../../assets/images/icons/login.svg";
import { button, icon, text } from "./LoginButton.styles";

export const LoginButton = () => {
  return (
    <Link to="/IniciarSesion" css={button}>
      <img css={icon} src={login} alt="Iniciar sesion"></img>
      <h2 css={text}>Iniciar sesion</h2>
    </Link>
  );
};
