import { css } from "@emotion/core";
import { colors } from "../../../utils/colors";

export const containerCss=css`
    margin-top: 10px;
    box-shadow: 0px 8px 6px rgb(0 0 0 / 15%);
    border-radius: 6px;
`;

export const titleRowCss=css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 50px;
    background-color: ${colors.gray.six};
    padding: 2px 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    & h2{
        font-size: 17px;
        color: ${colors.gray.one};
        font-weight: 500;
    }
`;

export const rowCss=css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 50px;
    padding: 0 20px;
    align-items: center;
    & h3{
        font-size: 14px;
        font-weight: normal;
        color: ${colors.gray.two};
        font-weight: 400;
    }
`;

export const buttonCss=css`
    width: 30px;
    background-color: transparent;
    height: 30px;
`;