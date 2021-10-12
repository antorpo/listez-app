/** @jsx jsx */
import { jsx } from "@emotion/core";
import ListOfTutorials from "../ListOfTutorials/ListOfTutorials"
import { titleCss, subtitleCss,itemCss } from "./InformationTutorials.styles"

function InformationTutorials() {
    return (
    <div >
        <h1 css={titleCss}>Mis tutorias</h1>
        <div css={itemCss}>
            <h2 css={subtitleCss}>Mis cursos pendientes</h2>
            <ListOfTutorials/>
        </div>
        <div css={itemCss}>
            <h2 css={subtitleCss}>Proximas tutorias</h2>
            <ListOfTutorials/>
        </div>
        <div css={itemCss}>
            <h2 css={subtitleCss}>Tutorias pasadas</h2>
            <ListOfTutorials/>
        </div>
    </div>
  );
}

export default InformationTutorials


