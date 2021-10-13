import { css} from "@emotion/core";
import fondoLogin from "../../../assets/images/fondoLogin.jpg"
import { breakpoints } from "../../../utils/breakpoints";
import { colors } from "../../../utils/colors";
import { fontFamilies } from "../../../utils/fontFamilies";

export const containerCss =css`
    background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${fondoLogin}) no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const cardCss=css`
    width: 300px;
    height: 480px;
    padding-bottom: 15px;
    @media(${breakpoints.tablet }){
        width: 520px;
        height: 575px;
        padding-bottom: 5px;
    }
`;

export const logoCss=css`
    padding-left: 20px;
    width: 120px;
    margin-top: 15px;
    @media(${breakpoints.tablet }){
        height: 100px;
        width: 120px;
        margin-top: 20px;
        padding-left: 0;
    }
`;

export const titleCss=css`
    margin: 0 0 10px ;
    font-family: ${fontFamilies.primary};
    color: ${colors.gray.two};
    font-size: 20px;
`;

export const inputCss=css`
    margin: 5px 0;
    & input{
        width: 250px;
    }
    @media(${breakpoints.tablet }){
        margin: 0;
        & input{
            width: 380px;
        }
    }
`;

export const inputContainerCss=css`
    @media(${breakpoints.tablet }){
        margin-bottom: 4px;
    }
`;

export const buttonCss=css`
    margin-top: 20px;
    & h2{
        color: ${colors.white};
        font-family: ${fontFamilies.primary};
        font-size: 15px;
        font-weight: normal;
    }
    @media(${breakpoints.tablet }){
        margin-top: 0px;
    }
`;

export const formCss=css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;