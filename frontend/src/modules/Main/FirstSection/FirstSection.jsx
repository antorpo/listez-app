/** @jsx jsx */
import { jsx } from '@emotion/core'
import {Link } from "react-router-dom";
import women from "../../../assets/images/women.svg"
import {container, title, text,button, image,buttonText} from "./FirstSection.styles"

function FirstSection() {
    return(
        <div css={container}>
            <div>
                <h1 css={title}>
                    SIN LIMITES PARA APRENDER
                </h1>
                <p css={text}>
                    Mejora en cada uno de tus conocimientos en los que presentas dificultades.
                </p>
                <Link to="/registrarse" css={button}>
                    <div>
                        <h2 css={buttonText}>
                            UNETE DE FORMA GRATUITA
                        </h2>         
                    </div>
                </Link>
            </div>
            <img src={women} alt="estudiante" css={image}></img>
        </div>
    )
}

export default FirstSection