import {css} from "@emotion/core";
import {fontFamilies} from "../../../../utils/fontFamilies";
import {colors} from "../../../../utils/colors"
import {breakpoints} from "../../../../utils/breakpoints"

export const containerCss =css`
    display: flex;
    flex-direction: column;
    @media(${breakpoints.tablet }){
        flex-direction: row;
        margin: 40px 10px;
    } 
`;

export const elementCss=css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const imageCss=css`
    height: 80px;
    margin-bottom: 20px;
`;

export const textCss=css`
    font-size: 15px;
    font-family: ${fontFamilies.primary};
    color: ${colors.gray.three};
    text-decoration: none;
    margin: 0 20px 10px;
    text-align: center;
`;