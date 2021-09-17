import { css } from "@emotion/core";
import { colors } from "../../utils/colors";
import { fontFamilies } from "../../utils/fontFamilies";
import { breakpoints } from "../../utils/breakpoints";

export const containerCard = css`
  margin: 30px;
  margin-top: 40px;
  width: 250px;
  height: 300px;
  position: absolute;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
  border: 1px solid #e7e7e7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 6px;
`;
export const elementCss = css`
  width: 100%;
  max-width: ${breakpoints.maxWidthWindow};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const imageContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

export const image = css`
  width: 120px;
  height: 120px;
  border-radius: 70px;
  margin-bottom: 41px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border: 1px solid ${colors.gray.six};
`;

export const containerText = css`
  margin-top: 14px;
  width: 100%;
  height: 100px
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const nameTutor = css`
  margin-left: 30px;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamilies.primary};
  color: ${colors.gray.two};
`;

export const descripcionTutor = css`
  margin: 12px;
  padding-left: 13px;
  font-style: italic;
  font-family: ${fontFamilies.sansSerif};
  color: ${colors.gray.three};
`;

export const buttonCss = css`
  width: 181px;
  height: 44px;

  font-weight: normal;
  margin-top: 10px;
  margin-left: 34px;
`;

export const titleButton = css`
  color: ${colors.white};
  font-family: ${fontFamilies.primary};
  font-size: 15px;
`;
