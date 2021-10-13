import {css} from "@emotion/core"
import styled from "@emotion/styled"
import { breakpoints } from "../../utils/breakpoints";

import { colors } from "../../utils/colors"

export const ModalStyled=styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: ${colors.transparentBlack};
    opacity: 0;
    ${({ open }) => open && css`
        opacity: 1;
        pointer-events: auto;
    `};
`;

export const containerCss=css`
    margin: auto;
`

export const closeButtonCss=css`
    position: absolute;
    top: 10px;
    right: 5px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${colors.white};
    @media(${breakpoints.tablet }){
        top: 80px;
        right: 15px;
        height: 30px;
        width: 30px;
    }
`;