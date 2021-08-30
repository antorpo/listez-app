/** @jsx jsx */
import { jsx } from "@emotion/core";
import {containerCss,elementCss,imageCss,textCss} from "./ThirdSection.styles";
import paw from "../../../../assets/images/paw.svg"

export const ThirdSection = () => {
  return (
    <div css={containerCss}>
      <div css={elementCss}>
          <img src={paw} alt="huella" css={imageCss}/>
          <p css={textCss}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque enim rerum consequatur. Consequuntur eius enim nihil impedit minima vero est ea. Vel possimus assumenda eos consequatur mollitia facere iusto ut?
          </p>
      </div>
      <div css={elementCss}>
      <img src={paw} alt="huella" css={imageCss}/>
          <p css={textCss}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque enim rerum consequatur. Consequuntur eius enim nihil impedit minima vero est ea. Vel possimus assumenda eos consequatur mollitia facere iusto ut?
          </p>
      </div>
      <div css={elementCss}>
      <img src={paw} alt="huella" css={imageCss}/>
          <p css={textCss}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque enim rerum consequatur. Consequuntur eius enim nihil impedit minima vero est ea. Vel possimus assumenda eos consequatur mollitia facere iusto ut?
          </p>
      </div>
    </div>
  );
};
