import {css} from "@emotion/core"
import { fontFamilies } from "../../../utils/fontFamilies"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints";

export const container=css`
    display: flex;
    margin: 95px 20px 25px;
    @media(${breakpoints.mobile }){
        margin: 70px 70px 25px;
        justify-content: space-between;
    } 
`;

export const title=css`
    font-family: ${fontFamilies.primary};
    font-weight: bold;
    font-size: 28px;
    color: ${colors.primary}; 
    @media(${breakpoints.mobile }){
        font-size: 77px;
        margin-top: 20px;
    }   
`;

export const text=css`
    font-family: ${fontFamilies.primary};
    font-weight: normal;
    font-size: 18px;
    margin: 6px 0;
    color: ${colors.gray.two};   
    @media(${breakpoints.mobile }){
        font-size: 30px;
        margin: 30px 30px 30px 0;
    } 
`;

export const button=css`
    text-decoration: none;
    & div{
        width: max-content;
        padding: 8px;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: ${colors.primary};
        border-radius: 5px;
        margin: 15px auto;
        @media(${breakpoints.mobile }){
            height: 60px;
            padding: 15px;
        } 
    }
`;

export const buttonText=css`
    font-family: ${fontFamilies.primary};
    font-weight: normal;
    font-size: 18px;
    color: ${colors.white};
    @media(${breakpoints.mobile }){
        font-size: 22px;
    } 
`;

export const image=css`
    display: none;
    @media(${breakpoints.mobile }){
        display: block;
        width: 30%;
        height: auto;
    }  
`;