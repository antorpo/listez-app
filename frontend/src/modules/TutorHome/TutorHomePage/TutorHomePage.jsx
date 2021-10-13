/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import SideMenu from "../../../components/SideMenu/SideMenu"
import { StyledButton, containerCss } from "./TutorHomePage.styles"
import TutorialCardsList from "../TutorialCardsList/TutorialCardsList";


function TutorHomePage() {
  const [optionActive, setOptionActive]=useState(1)
    return (
    <div >
     <SideMenu>
        <StyledButton 
          active={optionActive===1}
          onClick={()=>setOptionActive(1)
        }>
          Solicitudes tutorias 
        </StyledButton>
        <StyledButton 
          active={optionActive===2}
          onClick={()=>setOptionActive(2)}
        >
            Proximas tutorias
        </StyledButton>
        <StyledButton 
          active={optionActive===3}
          onClick={()=>setOptionActive(3)}
        >
            Tutorias pasadas
        </StyledButton>
      </SideMenu>
      <div css={containerCss}>
        {optionActive===1 &&(
          <TutorialCardsList type="tutoriasPendientes"/>
        )}
        {optionActive===2&&(
           <TutorialCardsList type="proximasTutorias"/>
        )}
        {optionActive===3&&(
           <TutorialCardsList type="tutoriasPasadas"/>
        )}
      </div>
    </div>
  );
}

export default TutorHomePage


