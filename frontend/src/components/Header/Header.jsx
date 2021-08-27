/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { container, image } from "./Header.styles";

export const Header = ({ rightElement }) => {
  return (
    <div css={container}>
      <div css={image}>
        <Link to="/">
          <img src={Logo} alt="logo listez app" loading="lazy"></img>
        </Link>
      </div>
      {rightElement}
    </div>
  );
};
