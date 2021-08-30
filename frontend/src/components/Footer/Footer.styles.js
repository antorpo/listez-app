import {css} from "@emotion/core";
import { colors } from "../../utils/colors";
import { fontFamilies } from "../../utils/fontFamilies";

export const footerCss=css`
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    height: 60px;
    background-color: ${colors.darkPrimary};
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const textCss=css`
    font-size: 12px;
    font-family: ${fontFamilies.primary};
    color: ${colors.white};
    text-decoration: none;
`;