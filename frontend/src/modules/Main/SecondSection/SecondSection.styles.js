import { css } from "@emotion/core"
import { colors } from "../../../utils/colors";
import { fontFamilies } from "../../../utils/fontFamilies";
import { breakpoints } from "../../../utils/breakpoints";

export const containerCss =css`
    flex-direction: column-reverse;
    display: flex;
    align-items: center;
    height: auto;
    background-color: ${colors.gray.six};
    padding: 0 20px;
    & img{
        height: 180px;
        margin-top: 10px;
    }
    @media(${breakpoints.mobile }){
        flex-direction: row;
        height: 428px;
        padding: 0 70px;
        & img{
        height: 300px;
        margin-top: 10px;
    }
    } 
`;

export const textContainerCss=css`
    height: auto;
    margin: 20px 0 0;
    text-align: center;
    @media(${breakpoints.mobile }){
        margin: 0 50px;
        height: 176px;
        text-align: left;
    } 
`;

export const titleCss=css`
    font-family: ${fontFamilies.primary};
    font-weight: bold;
    font-size: 25px;
    color: ${colors.primary}; 
    @media(${breakpoints.mobile }){
        font-size: 60px;
    } 
`;

export const textCss=css`
    font-family: ${fontFamilies.primary};
    font-size: 17px;
    color: ${colors.gray.two}; 
    @media(${breakpoints.mobile }){
        font-size: 26px;
    } 
`;