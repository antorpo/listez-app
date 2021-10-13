/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from "@emotion/core";
import { Button, Card } from "../../../../../components";
import Modal, { useModal } from "../../../../../components/Modal";
import usuario from "../../../../../assets/images/usuario.png";
import RequestTutoring from './RequestTutoring/RequestTutoring';
import { 
    containerCss,
    cardCss,
    photoCss,
    nameCss,
    descriptionCss,
    coursesCss,
    buttonCss,
    modalCss
 } from "./TutorCard.styles";

function TutorCard({id, photo, name, description, courses}) {
    const { open, onToggle,onClose } = useModal();
    const handleClick=()=>{
        onToggle();
    }
    return (
        <div css={containerCss}>
            <Card css={cardCss}>
                <div css={photoCss}>
                    {photo  || (
                        <img src={usuario} alt="usuario"/>
                    )}
                </div>
                <h2 css={nameCss}>{name}</h2>
                <p css={descriptionCss}>{description}</p>
                <h3 css={coursesCss }>{courses}</h3>
                <Button onClick={handleClick} css={buttonCss}>Solicitar tutoria</Button>
            </Card>
            {open && (
                <Modal
                    open={open}
                    onClose={onClose}
                    css={modalCss}
                >
                  <RequestTutoring idTutor={id}/>
                </Modal>
            )}
        </div> 
  );
}

TutorCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
    courses: PropTypes.string,
};

TutorCard.defaultProps = {
    id:"",
    name: "Nombre Tutor",
    description: "descripción descripción descripción descripción descripción",
    photo:"",
    courses: "Matematica, español"
};

export default TutorCard


