/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useField } from "formik";
import { containerCss, inputCss,errorTextCss} from "./Input.styles";

export const Input = ({label,placeholder,stylesContainer,...props}) => {
    const [field,meta] = useField(props);
    const error = meta.touched && meta.error;

  return (
      <div css={[containerCss, stylesContainer]}>
          {label &&(
              <label>{label}</label>
          )}
          <input placeholder={placeholder} css={inputCss} {...field} {...props}/>
            {error && <h4 css={errorTextCss}>{meta.error}</h4>}
      </div>
  );
};