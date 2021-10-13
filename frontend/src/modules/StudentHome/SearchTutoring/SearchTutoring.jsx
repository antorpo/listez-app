/** @jsx jsx */
import { useState, useEffect } from "react"
import { jsx } from "@emotion/core";
import TutorCard from "./components/TutorCard/TutorCard"
import {  } from "./SearchTutoring.styles"

const tutoresMock=[
    {
        name:"Juanito Perez",
        description:"Soy estudiante de ingenieria quimica, soy una persona paciente y apasionada por la enseñanza",
        photo:"",
        courses:"Matematica, español",
        score:3
    }
]

function SearchTutoring() {
    
    const[tutores, setTutors]=useState(tutoresMock)
    useEffect(()=>{
        //consumir endpoint que obtiene tutored
        /*

        */
    })
    return (
        <div>
            {tutores.map((tutor)=>(
                <TutorCard 
                    name={tutor.name}
                    description={tutor.description}
                    courses={tutor.courses}
                />
            ))}
        </div>
  );
}

export default SearchTutoring


