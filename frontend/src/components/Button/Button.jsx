/** @jsx jsx */
import { jsx } from "@emotion/core";
import { buttonCss } from "./Button.styles";

export const Button = ({children,type, ...props}) => {
  return (
      <button type={type} css={buttonCss} {...props}>{children}</button>
  );
};