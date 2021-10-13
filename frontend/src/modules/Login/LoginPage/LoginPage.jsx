/** @jsx jsx */
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { Button, Card, Input } from "../../../components";
import Logo from "../../../assets/images/logo.svg";
import { loggearUsuario } from "../../../store/actions/securityActions";
import { useDispatch } from "react-redux";
import {
  containerCss,
  cardCss,
  logoCss,
  titleCss,
  inputCss,
  buttonCss,
  linkCss,
  formCss
} from "./LoginPage.styles";

const initialValues={
  correo:"",
  password:"",
}

const formSchema = Yup.object().shape({
  correo: Yup.string()
    .required("Requerido")
    .email("Email incorrecto")
    .default(""),
  password: Yup.string().required("Requerido"),
});

function LoginPage() {
  let history = useHistory();
  const dispatch = useDispatch();

  const onSubmit= async (values,actions)=>{
   
    const answer = await dispatch(loggearUsuario(values));
    console.log({answer})
    if(answer.statusText ==='OK' ){
      history.push("/inicioEstudiante");
      actions.resetForm();
    } 
  }

  return(
    <div css={containerCss}>
      <Card css={cardCss}>
        <img src={Logo} alt="logo" css={logoCss} />
        <h2 css={titleCss}>Iniciar Sesión</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values,actions)=>onSubmit(values,actions)}
          validationSchema={formSchema}
        >
          {()=>(
            <Form css={formCss}>
              <Input 
                name="correo"
                placeholder="Correo electronico" 
                css={inputCss} 
              />
              <Input 
                type="password"
                name="password"
                placeholder="Contraseña" 
                css={inputCss} 
              />
              <Button
                type="submit"
                css={buttonCss}
              >
                <h2>INICIAR SESIÓN</h2>
              </Button>
            </Form>
          )}
        </Formik>
        <Link to="/crearCuenta" css={linkCss}>
          <h2>¿No tienes una cuenta? Registrate</h2>
        </Link>
      </Card>
    </div>
  )
}

export default LoginPage
