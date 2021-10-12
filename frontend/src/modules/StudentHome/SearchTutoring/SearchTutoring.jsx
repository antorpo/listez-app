/** @jsx jsx */
import { jsx } from "@emotion/core";
import ListOfTutorials from "../ListOfTutorials/ListOfTutorials"
import TutorCard from "./components/TutorCard/TutorCard"
import {  } from "./SearchTutoring.styles"

const tutores=[
    {
        name:"Juanito Perez",
        description:"Soy estudiante de ingenieria quimica, soy una persona paciente y apasionada por la enseñanza",
        photo:"",
        courses:"Matematica, español",
        score:3
    }
]


function SearchTutoring() {
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


