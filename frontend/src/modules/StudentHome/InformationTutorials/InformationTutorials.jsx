/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import ListOfTutorials from "../ListOfTutorials/ListOfTutorials"
import { titleCss, subtitleCss,itemCss } from "./InformationTutorials.styles"

function InformationTutorials() {
    const[courses, setCourses]=useState({})
    useEffect(()=>{
        //consumir endpoint que obtiene cursos por estado
        /*

        */
    })
    return (
    <div >
        <h1 css={titleCss}>Mis tutorias</h1>
        <div css={itemCss}>
            <h2 css={subtitleCss}>Mis cursos pendientes</h2>
            <ListOfTutorials courses={courses.pending}/>
        </div>
        <div css={itemCss}>
            <h2 css={subtitleCss}>Proximas tutorias</h2>
            <ListOfTutorials courses={courses.next}/>
        </div>
        <div css={itemCss}>
            <h2 css={subtitleCss}>Tutorias pasadas</h2>
            <ListOfTutorials courses={courses.past}/>
        </div>
    </div>
  );
}

export default InformationTutorials


