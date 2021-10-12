/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { Button, Card,Input } from "../../../components";
import dump from "../../../assets/images/icons/dump.svg";
import { containerCss,titleRowCss,rowCss,buttonCss } from "./ListOfTutorials.styles"


const list=[
    {
        curso:  "Estructura de datos",
        tutor: "Julanito perez",
        fecha: "2020-04-29 5:00 pm"
    },
    {
        curso:  "Estructura de datos",
        tutor: "Julanito perez",
        fecha: "2020-04-29 5:00 pm"
    },
    {
        curso:  "Estructura de datos",
        tutor: "Julanito perez",
        fecha: "2020-04-29 5:00 pm"
    }
]

function ListOfTutorials() {
    return (
        <div css={containerCss} >
            <div css={titleRowCss}>
                <h2>curso</h2>
                <h2>Tutor@</h2>
                <h2>Fecha de tutoria</h2>
            </div>
            {list.map((element)=>(
                <div css={rowCss}>
                    <h3>{element.curso}</h3>
                    <h3>{element.tutor}</h3>
                    <h3>{element.fecha}</h3>
                    <Button css={buttonCss}>
                        <img src={dump} alt="borrar"/>
                    </Button>
                </div>
            ))}
        </div>
  );
}

export default ListOfTutorials


