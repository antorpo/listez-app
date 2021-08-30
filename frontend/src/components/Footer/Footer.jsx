/** @jsx jsx */
import { jsx } from "@emotion/core";
import {footerCss,textCss} from "./Footer.styles"

function Footer() {
    return(
        <div css={footerCss}>
            <h2 css={textCss}>
                Elaborado por{" "}
                <a href="mailto:prueba@gmail.com" css={textCss}>
                     (definir nombre)
                </a>
            </h2>
        </div>
    )
}

export default Footer




