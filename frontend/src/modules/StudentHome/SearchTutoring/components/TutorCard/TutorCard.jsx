/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { Button, Card,Input } from "../../../../../components";
import { 
    containerCss,
    cardCss,
    photoCss,
    nameCss,
    descriptionCss,
    coursesCss,
    buttonCss
 } from "./TutorCard.styles"


function TutorCard({photo, name,description,courses}) {
    return (
        <div css={containerCss}>
            <Card css={cardCss}>
                <div css={photoCss}></div>
                <h2 css={nameCss}>{name}</h2>
                <p css={descriptionCss}>{description}</p>
                <h3 css={coursesCss }>{courses}</h3>
                <Button css={buttonCss}>Solicitar tutoria</Button>
            </Card>
        </div>
    
  );
}

export default TutorCard


