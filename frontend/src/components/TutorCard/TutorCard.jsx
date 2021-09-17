/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  containerCard,
  imageContainer,
  image,
  containerText,
  nameTutor,
  descripcionTutor,
  buttonCss,
  titleButton,
} from "./TutorCard.styles";
import { Button } from "..";
import PropTypes from "prop-types";
import marcelo from "../../assets/images/marcelo.png";

function TutorCard({ name }) {
  return (
    <div css={containerCard}>
      <div css={imageContainer}>
        <img css={image} src={marcelo} alt="marcelo tutor" loading="lazy"></img>
      </div>
      <div css={containerText}>
        <h1 css={nameTutor}>{name}</h1>
        <p css={descripcionTutor}>
          Soy estudiante de ingenieria quimica, soy una persona paciente y
          apasionada por la emseñanza
        </p>
        <Button css={buttonCss}>
          <h2 css={titleButton}>Solicitar tutoria</h2>
        </Button>
      </div>
    </div>
  );
}

TutorCard.PropTypes = {
  name: PropTypes.string,
};

TutorCard.defaultProps = {
  name: "Pepito Perez",
};

export default TutorCard;
