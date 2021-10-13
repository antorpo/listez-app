/** @jsx jsx */
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { jsx } from "@emotion/core";
import { Button, Card, Input } from "../../../../../../components";
import { cardCss, formCss, inputCss, buttonCss } from "./RequestTutoring.styles"

const initialValues={
    course:"",
    date:"",
    information:""
}

const formSchema = Yup.object().shape({
    course: Yup.string().required("Requerido").default(""),
    date: Yup.string().required("Requerido").default(""),
    information: Yup.string().required("Requerido").default(""),
  });

function RequestTutoring({idTutor}) {

    const onSubmit= async (values,actions)=>{
        //logica para generar la tutoria
        actions.resetForm();
    }

    return (
        <Card css={cardCss}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values,actions)=>onSubmit(values,actions)}
                validationSchema={formSchema}
            >
                {()=>(
                    <Form css={formCss}>
                        <Input 
                            name="course"
                            placeholder="Tema de la tutoria" 
                            css={inputCss} 
                        />
                        <Input 
                            name="date"
                            placeholder="Fecha de la tutoria" 
                            css={inputCss} 
                        />
                        <Input 
                            name="information"
                            placeholder="Información de la tutoria" 
                            css={inputCss} 
                        />
                        <Button
                            type="submit"
                            css={buttonCss}
                        >
                            <h2>Enviar solicitud</h2>
                        </Button>
                    </Form>
                )}
            </Formik>
        </Card>
    );
}

RequestTutoring.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
    courses: PropTypes.string,
};

RequestTutoring.defaultProps = {
    name: "Nombre Tutor",
    description: "descripción descripción descripción descripción descripción",
    photo:"",
    courses: "Matematica, español"
};

export default RequestTutoring


