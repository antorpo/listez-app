/** @jsx jsx */
import { jsx } from "@emotion/core";
import { SideMenuStyled } from "./SideMenu.styles"

const SideMenu = ({children }) => {
  return (
    <SideMenuStyled >
        {children}
    </SideMenuStyled>
  );
};

export default SideMenu
