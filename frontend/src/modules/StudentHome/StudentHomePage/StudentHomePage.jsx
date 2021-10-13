/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import SideMenu from "../../../components/SideMenu/SideMenu"
import InformationTutorials from "../InformationTutorials/InformationTutorials"
import SearchTutoring from "../SearchTutoring/SearchTutoring"
import { StyledButton, containerCss } from "./StudentHomePage.styles"



function StudentHomePage() {
  const [optionActive, setOptionActive]=useState(1)
    return (
    <div >
     <SideMenu>
        <StyledButton 
          active={optionActive===1}
          onClick={()=>setOptionActive(1)
        }>
          Mis tutorias
        </StyledButton>
        <StyledButton 
          active={optionActive===2}
          onClick={()=>setOptionActive(2)}
          >
            Solicitar tutoria
          </StyledButton>
      </SideMenu>
      <div css={containerCss}>
        {optionActive===1 &&(
          <InformationTutorials/>
        )}
        {optionActive===2&&(
          <SearchTutoring/>
        )}
      </div>
    </div>
  );
}

export default StudentHomePage


