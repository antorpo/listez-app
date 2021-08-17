import {css} from "@emotion/core"
import { fontFamilies } from "../../utils/fontFamilies"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints";

export const button=css`
    display: flex;
    align-items: center;
    margin-right: 15px;
    border: none;
    background-color: white;
    display: flex;
    text-decoration: none;
`;

export const icon=css`
    height: 15px;
    margin-right: 5px;
`;

export const text=css`
    display: flex;
    align-items: center;
    font-family: ${fontFamilies.primary};
    font-weight: bold;
    font-size: 12px;
    color: ${colors.gray.three};   
    @media(${breakpoints.mobile }){
        font-size: 14px;
    }  
`;