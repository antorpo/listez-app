import React from "react";
import { ContainerPage, Header } from "../components";
import Footer from "../components/Footer/Footer";
import  TutorHomePage  from "../modules/TutorHome/TutorHomePage/TutorHomePage"
import {RightElementHeader} from "../modules/StudentHome/RightElementHeader/RightElementHeader"

export const TutorHome = () => {
  return (
    <ContainerPage>
      <Header rightElement={<RightElementHeader/>}/>
      <TutorHomePage/>
      <Footer/>
    </ContainerPage>
  );
};