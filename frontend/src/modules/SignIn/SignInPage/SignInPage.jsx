/** @jsx jsx */
import { useDispatch } from "react-redux";
import { jsx } from "@emotion/core";
import { Button, Card,Input } from "../../../components";
import Logo from "../../../assets/images/logo.svg";
import { containerCss,cardCss,logoCss,titleCss,inputCss,buttonCss } from "./SignInPage.styles";
import { registrarUsuario } from "../../../store/actions/securityActions";

export const SignInPage = () => {
  const dispatch = useDispatch();

  const registrar = () => {

    const userMock = {
      correo: 'alejandro@udea.edu',
      password: 'jeje',
      nombre: 'Alejandro',
      apellido: 'Ciro',
      documento_identidad: '332232',
    }

    dispatch(registrarUsuario(userMock))
  }

  return (
    <div css={containerCss}>
        <Card css={cardCss}>
            <img src={Logo} alt="logo" css={logoCss}/>
            <h2 css={titleCss}>Regístrate</h2>
            <Input placeholder="Nombre" css={inputCss}/>
            <Input placeholder="Correo electronico" css={inputCss}/>
            <Input placeholder="Documento de identidad" css={inputCss}/>
            <Input placeholder="Contraseña" css={inputCss}/>
            <Input placeholder="Confirmar contraseña" css={inputCss}/>
            <Button css={buttonCss} onClick={registrar}>
                <h2 >
                    Crear
                </h2>
            </Button>
        </Card>
    </div>
  );
};


