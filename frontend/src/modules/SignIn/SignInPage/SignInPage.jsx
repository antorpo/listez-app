/** @jsx jsx */
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { jsx } from "@emotion/core";
import { Button, Card,Input } from "../../../components";
import Logo from "../../../assets/images/logo.svg";
import { containerCss,cardCss,logoCss,titleCss,inputCss,buttonCss, formCss,inputContainerCss } from "./SignInPage.styles";
import { registrarUsuario } from "../../../store/actions/securityActions";


const initialValues={
  nombre:"",
  apellido:"",
  correo:"",
  documento_identidad: "",
  password:"",
  password_validation:""
}

const formSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido").default(""),
  apellido: Yup.string().required("Requerido").default(""),
  correo: Yup.string()
    .required("Requerido")
    .email("Email incorrecto")
    .default(""),
  documento_identidad: Yup.number().required("Requerido"),
  password: Yup.string().required("Requerido"),
  password_validation:Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
  .required("Es necesario confirmar la contraseña"),
});

function SignInPage() {
  const dispatch = useDispatch();

  const registrar = (values) => {
    const {password_validation,...rest}=values;
    const {answer}=dispatch(registrarUsuario(rest))
    console.log("aquii", answer)
  }

  return (
    <div css={containerCss}>
        <Card css={cardCss}>
            <img src={Logo} alt="logo" css={logoCss}/>
            <h2 css={titleCss}>Regístrate</h2>
            <Formik
            initialValues={initialValues}
            onSubmit={(values)=>registrar(values)}
            validationSchema={formSchema}
            >
              {()=>(
                <Form css={formCss}>
                  <Input 
                    name="nombre"
                    placeholder="Nombre" 
                    css={inputCss}
                    stylesContainer={inputContainerCss}
                  />
                  <Input 
                    name="apellido"
                    placeholder="Apellido" 
                    css={inputCss}
                    stylesContainer={inputContainerCss}
                  />
                  <Input 
                    name="correo"
                    placeholder="Correo electronico" 
                    css={inputCss}
                    stylesContainer={inputContainerCss}
                  />
                  <Input 
                    name="documento_identidad"
                    placeholder="Documento de identidad" 
                    css={inputCss}
                    stylesContainer={inputContainerCss}
                  />
                  <Input 
                    name="password"
                    placeholder="Contraseña" 
                    css={inputCss} 
                    type="password"
                    stylesContainer={inputContainerCss}
                  />
                  <Input 
                    name="password_validation"
                    placeholder="Confirmar contraseña" 
                    css={inputCss} 
                    type="password"
                    stylesContainer={inputContainerCss}
                  />
                  <Button css={buttonCss} type="submit">
                      <h2>Crear</h2>
                  </Button>
                </Form>
              )}
            </Formik>
        </Card>
    </div>
  );
}

export default SignInPage


