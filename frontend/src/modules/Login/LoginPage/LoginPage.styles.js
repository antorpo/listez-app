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
    @media(${breakpoints.tablet }){
        width: 520px;
        height: 480px;
    }
`;

export const logoCss=css`
    height: 120px;
    margin-top: 20px;
    @media(${breakpoints.tablet }){
        height: 150px;
    }
`;

export const titleCss=css`
    margin: 10px 0;
    font-family: ${fontFamilies.primary};
    color: ${colors.gray.two};
    font-size: 20px;
`;

export const inputCss=css`
    margin: 15px 0;
    & input{
        width: 250px;
    }
    @media(${breakpoints.tablet }){
        & input{
            width: 380px;
        }
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
        margin-top: 10px;
    }
`;

export const linkCss=css`
    margin-top: 30px;
    color: ${colors.gray.four};
    text-decoration: none;
    & h2{
        font-size: 14px;
        font-family: ${fontFamilies.primary};
    }
    @media(${breakpoints.tablet }){
        margin-top: 15px;
        & h2{
            font-size: 16px;
            font-family: ${fontFamilies.primary};
        }
    }
`;