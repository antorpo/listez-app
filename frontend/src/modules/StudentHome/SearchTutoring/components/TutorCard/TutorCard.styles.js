import { css } from "@emotion/core";
import { colors } from "../../../../../utils/colors";

export const modalCss=css`

`;

export const containerCss=css`
    height: 300px;
    width: min-content;
    display: flex;
    align-items: end;
`;

export const cardCss=css`
    width: 250px;
    height: 266px;
    padding-top: 60px;
    border: solid 1px ${colors.gray.five};
    position: relative
`;

export const photoCss=css`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    top: -35px;
    box-shadow: 0px 4px 5px rgb(0 0 0 / 15%);
    background-color: ${colors.gray.six};
    & img{
        height: 90px;
    }
`;

export const nameCss=css`
    font-size: 18px;
    width: 100%;
    text-align: center;
    font-weight: 400;
`;

export const descriptionCss=css`
    width: 100%;
    padding: 12px 15px;
    font-size: 14px;
    text-align: center;
`;

export const coursesCss=css`
    font-size: 15px;
    font-weight: 400;
`;

export const buttonCss=css`
    width: max-content;
    padding: 10px;
    height: 35px;
    margin-top: 20px;
    color: white;
`;

