import { css } from "@emotion/core";
import { colors } from "../../utils/colors";
import { breakpoints } from "../../utils/breakpoints";

export const container=css`
    position: fixed;;
    top:0;
    left: 0px;
    width: 100%;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${colors.white};
    z-index: 3;
    @media(${breakpoints.tablet }){
        height: 70px;
        padding: 0 70px;
    }
`;

export const elementCss=css`
    width: 100%;
    max-width: ${breakpoints.maxWidthWindow};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const image=css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 60px;
    & img{
        height: 65px;
    }
    @media(${breakpoints.tablet }){
        width: 110px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: end;
        & img{
            height: 75px;
        }
    }
`;