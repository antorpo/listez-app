import { css } from "@emotion/core";
import styled from "@emotion/styled"
import { Button } from "../../../components";


export const StyledButton =styled(Button)`
    background: transparent;
    width: max-content;
    margin-left: 10px;
    ${({active})=>css`
        font-weight: ${active? "bold": "normal"}
    `}
`;

export const containerCss=css`
    margin: 80px 50px 50px 210px;
`;