import { css } from "@emotion/core";
import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colors";
import { fontFamilies } from "../../utils/fontFamilies";

export const principalContainer = css`
  margin-top: 70px;
  margin-bottom: 67px;
  @media (${breakpoints.tablet}) {
    margin-top: 85px;
  }
`;

export const container = css`
  display: flex;
  height: auto;
  margin: 20px 30px;
  align-items: center;
  @media (${breakpoints.tablet}) {
    padding: 0 60px;
  }
`;

export const title1 = css`
  font-family: ${fontFamilies.primary};
  font-size: 18px;
  color: ${colors.gray.one};
  @media (${breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const title2 = css`
  font-family: ${fontFamilies.primary};
  font-size: 15px;
  color: ${colors.gray.one};
  @media (${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const text = css`
  font-family: ${fontFamilies.primary};
  font-weight: normal;
  font-size: 12px;
  display: 6px 0;
  padding: 8px 30px;
  color: ${colors.gray.two};
  @media (${breakpoints.tablet}) {
    font-size: 20px;
  }
`;
