import { css} from "@emotion/core";
import { colors } from "../../utils/colors";

export const containerCss=css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 520px;
    height: 480px;
    background-color: ${colors.white};
    border-radius: 10px;
    box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.15);
`;