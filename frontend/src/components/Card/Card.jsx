/** @jsx jsx */
import { jsx } from "@emotion/core";
import { containerCss} from "./Card.styles";

export const Card = ({children,...props}) => {
  return (
    <div css={containerCss} { ...props}>
        {children}
    </div>
  );
};
