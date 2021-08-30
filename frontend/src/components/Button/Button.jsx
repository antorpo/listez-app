/** @jsx jsx */
import { jsx } from "@emotion/core";
import { buttonCss } from "./Button.styles";

export const Button = ({children, ...props}) => {
  return (
      <button css={buttonCss} {...props}>{children}</button>
  );
};