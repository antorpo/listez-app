import { css } from "@emotion/core";
import { colors } from "../../utils/colors";
import { fontFamilies } from "../../utils/fontFamilies";

export const inputCss=css`
    border: solid 1px ${colors.gray.one};
    border-radius: 6px;
    padding: 0 15px;
    height: 40px;
    width: 380px;
    font-family: ${fontFamilies.primary};
`;