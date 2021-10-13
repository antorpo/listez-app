import { css } from "@emotion/core";
import { breakpoints } from "../../../../../../utils/breakpoints";
import { colors } from "../../../../../../utils/colors";
import { fontFamilies } from "../../../../../../utils/fontFamilies";

export const cardCss=css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 430px;
    height: 350px;
    border-radius: 6px;
    background-color: white
`;

export const formCss=css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const inputCss=css`
    margin: 15px 0;
    border: solid 1px ${colors.gray.five};
    & input{
        width: 150px;
    }
    @media(${breakpoints.tablet }){
        margin: 5px  0;
        height: 60px;
        & input{
            width: 345px;
        }
    }
`;

export const buttonCss=css`
    width: 180px;
    height: 40px;
    margin-top: 20px;
    & h2{
        color: ${colors.white};
        font-family: ${fontFamilies.primary};
        font-size: 15px;
        font-weight: normal;
    }
    @media(${breakpoints.tablet }){
        margin-top: 10px;
    }
`;