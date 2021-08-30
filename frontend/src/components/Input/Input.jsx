/** @jsx jsx */
import { jsx } from "@emotion/core";
import { inputCss} from "./Input.styles";

export const Input = ({label,placeholder,...props}) => {
  return (
      <div {...props}>
          {label &&(
              <label>{label}</label>
          )}
          <input placeholder={placeholder} css={inputCss}/>
      </div>
  );
};