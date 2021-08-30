/** @jsx jsx */
import { jsx } from "@emotion/core";
import { containerCss } from "./ContainerPage.styles";

export const ContainerPage = ({children}) => {
  return (
    <div css={containerCss}>
        {children}
    </div>
  );
}