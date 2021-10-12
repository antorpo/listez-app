/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button, Card,Input } from "../../../components";
import Logo from "../../../assets/images/logo.svg";
import { containerCss,cardCss,logoCss,titleCss,inputCss,buttonCss } from "./SignInPage.styles";

export const SignInPage = () => {
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
            <Button css={buttonCss}>
                <h2 >
                    Crear
                </h2>
            </Button>
        </Card>
    </div>
  );
};


