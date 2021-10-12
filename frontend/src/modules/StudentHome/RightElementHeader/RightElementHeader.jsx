/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import user from "../../../assets/images/icons/user.svg"
import downArrow from "../../../assets/images/icons/downArrow.svg"
import { userIconCss, userOptions, containerCss } from "./RightElementHeader.styles";

export const RightElementHeader = () => {
  return (
    <div css={containerCss}>
        Notificaciones
        <div css={userOptions}>
            <img css={userIconCss} src={user} alt="opciones del usuario"/>
            <img src={downArrow} alt="abrir opciones del usuario"/>
        </div>
    </div>
  );
};
