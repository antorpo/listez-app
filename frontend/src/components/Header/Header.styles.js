import { css } from "@emotion/core";
import { breakpoints } from "../../utils/breakpoints";

export const container=css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:absolute;
    top:0;
    left: 0px;
    width: 100%;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media(${breakpoints.mobile }){
        height: 70px;
        padding: 0 70px;
    }
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
    @media(${breakpoints.mobile }){
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