/** @jsx jsx */
import { jsx } from "@emotion/core";
import TutorialCard from "../TutorialCard/TutorialCard";
import { containerCss } from "./TutorialCardsList.styles"
import { useEffect, useState } from "react";


const list=[
    {
        nombreEstudiante:  "Julanito perez",
        NombreCurso: "Estructura de datos",
        fechaDeSolicitud: "2020-04-29 5:00 pm",
        fechaParaTutoria: "2020-04-29 5:00 pm",
        info: "información de la tutoria"
    },
    {
        nombreEstudiante:  "Julanito perez",
        NombreCurso: "Estructura de datos",
        fechaDeSolicitud: "2020-04-29 5:00 pm",
        fechaParaTutoria: "2020-04-29 5:00 pm",
        info: "información de la tutoria"
    },
    {
        nombreEstudiante:  "Julanito perez",
        NombreCurso: "Estructura de datos",
        fechaDeSolicitud: "2020-04-29 5:00 pm",
        fechaParaTutoria: "2020-04-29 5:00 pm",
        info: "información de la tutoria"
    }
]

function TutorialCardsList({type}) {
    const [tutorships, setTutorships]=useState(list);
    useEffect(()=>{
        //acá agregar la logica para consultar las tutorias de acuerdo al tipo
    },[])
    return (
        <div css={containerCss}>
           {tutorships.map((tutorship)=>(
               <TutorialCard 
                    studentName={tutorship.nombreEstudiante} 
                    courseName={tutorship.NombreCurso} 
                    applicationDate={tutorship.fechaDeSolicitud}   
                    tutorshipDate={tutorship.fechaParaTutoria}  
                    information={tutorship.info} 
                    type={type}
                />
           ))}
        </div>
  );
}

export default TutorialCardsList


