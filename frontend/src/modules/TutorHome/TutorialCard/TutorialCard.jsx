/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from "@emotion/core";
import { Button, Card } from "../../../components";
import Modal, { useModal } from "../../../components/Modal";
import { 
    containerCss,
    cardCss,
    titleCss,
    textCss,
    containerTextCss,
    buttonCss,
    containerModalCss
 } from "./TutorialCard.styles";

function TutorialCard({
    id, 
    studentName, 
    courseName, 
    applicationDate,
    tutorshipDate,
    information,
    type
}) {
    const { open, onToggle,onClose } = useModal();
    const handleClick=()=>{
        onToggle();
    }
    const onClickAccept=()=>{
        //logica para cambiar los datos de una tutoria de pendiente a aceptada
    }
    return (
        <div css={containerCss}>
            <Card css={cardCss}>
                <div css={containerTextCss}>
                    <span css={titleCss}>Solicitada por: </span>
                    <span css={textCss}>{studentName}</span>
                </div>
                <div css={containerTextCss}>
                    <span css={titleCss}>Temas: </span>
                    <span css={textCss}>{courseName}</span>
                </div>
                <div css={containerTextCss}>
                    <span css={titleCss}>Solicitada en: </span>
                    <span css={textCss}>{applicationDate}</span>
                </div>
                <div css={containerTextCss}>
                    <span css={titleCss}>Fecha de la tutoria: </span>
                    <span css={textCss}>{tutorshipDate}</span>
                </div>
                <div css={containerTextCss}>
                    <span css={titleCss}>Información adicional:  </span>
                    <span css={textCss}>{information}</span>
                </div>
                {type==="tutoriasPendientes" &&(
                    <Button onClick={handleClick} css={buttonCss}>Aceptar tutoria</Button>
                )}
            </Card>
            {open && (
                <Modal
                    open={open}
                    onClose={onClose}
                >
                  <Card css={containerModalCss}>
                      <span>
                          ¿Seguro deseas aceptar la tutoria?
                      </span>
                      <Button onClick={onClickAccept} css={buttonCss}>Confirmar</Button>
                  </Card>
                </Modal>
            )}
        </div> 
  );
}

TutorialCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
    courses: PropTypes.string,
};

TutorialCard.defaultProps = {
    id:"",
    name: "Nombre Tutor",
    description: "descripción descripción descripción descripción descripción",
    photo:"",
    courses: "Matematica, español"
};

export default TutorialCard


