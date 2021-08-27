/** @jsx jsx */
import { jsx } from '@emotion/core'
import men from "../../../assets/images/men.svg"
import {containerCss,textContainerCss,titleCss,textCss} from "./SecondSection.styles"

function SecondSection() {
    return(
        <div css={containerCss}>
            <div>
                <img src={men} alt="tutor"/>
            </div>
            <div css={textContainerCss}>
                <h2 css={titleCss}>SI ERES TUTOR</h2>
                <p css={textCss}>ListezApp te da la oportunidad de dar a conocer tus serviciós para que 
                    puedas dar lo mejor de ti, de una manera agil y sin complicaciones.
                </p>
            </div>
        </div>
    )
}

export default SecondSection