import { css } from "@emotion/core";
import { colors } from "../../../utils/colors";

export const containerCss=css`
    height: 300px;
    width: min-content;
    display: flex;
    align-items: end;
`;

export const cardCss=css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    width: 250px;
    height: 266px;
    border: solid 1px ${colors.gray.five};
`;

export const containerTextCss=css`
    width: 100%;
    text-align: left;
    margin-bottom: 4px;
`;

export const titleCss=css`
    font-size: 16px;
    font-weight: 600;
`;

export const textCss=css`
    font-size: 14px;
    font-weight: normal;
`;

export const buttonCss=css`
    width: max-content;
    padding: 10px;
    height: 35px;
    margin-top: 20px;
    color: white;
`;

export const containerModalCss=css`
    width: 290px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
`;