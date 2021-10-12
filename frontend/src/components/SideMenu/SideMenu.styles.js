import styled from "@emotion/styled"
import { colors } from "../../utils/colors"

export const SideMenuStyled=styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: ${colors.white};
    box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.15);
    padding: 20px 15px;
    margin-top: 70px;
`;
