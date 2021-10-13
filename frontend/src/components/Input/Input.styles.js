import { css } from "@emotion/core";
import { colors } from "../../utils/colors";
import { fontFamilies } from "../../utils/fontFamilies";

export const containerCss=css`
    position: relative;
    padding-bottom: 15px;
`;

export const inputCss=css`
    border: solid 1px ${colors.gray.one};
    border-radius: 6px;
    padding: 0 15px;
    height: 40px;
    width: 380px;
    font-family: ${fontFamilies.primary};
`;

export const errorTextCss = css`
    font-size: 12px;
    color: ${colors.error};
    position:absolute;
    bottom: 1px;
    left:0;
`;