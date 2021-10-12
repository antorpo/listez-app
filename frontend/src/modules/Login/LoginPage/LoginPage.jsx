/** @jsx jsx */
import { useDispatch } from "react-redux";
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { Button, Card, Input } from "../../../components";
import Logo from "../../../assets/images/logo.svg";
import { loggearUsuario } from "../../../store/actions/securityActions";
import {
  containerCss,
  cardCss,
  logoCss,
  titleCss,
  inputCss,
  buttonCss,
  linkCss,
} from "./LoginPage.styles";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const loginUser = async (correo, password) => {
    dispatch(loggearUsuario(correo, password));
  };

  return (
    <div css={containerCss}>
      <Card css={cardCss}>
        <img src={Logo} alt="logo" css={logoCss} />
        <h2 css={titleCss}>Iniciar Sesión</h2>
        <Input placeholder="Correo electronico" css={inputCss} />
        <Input placeholder="Contraseña" css={inputCss} />
        <Button
          css={buttonCss}
          onClick={() => loginUser("antonio@gmail.com", "asdfg123")}
        >
          <h2>INICIAR SESIÓN</h2>
        </Button>
        <Link to="/Registro" css={linkCss}>
          <h2>¿No tienes una cuenta? Registrate</h2>
        </Link>
      </Card>
    </div>
  );
};
