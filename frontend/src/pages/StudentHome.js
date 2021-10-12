import React from "react";
import { ContainerPage, Header } from "../components";
import Footer from "../components/Footer/Footer";
import  StudentHomePage  from "../modules/StudentHome/StudentHomePage"
import {RightElementHeader} from "../modules/StudentHome/RightElementHeader/RightElementHeader"

export const StudentHome = () => {
  return (
    <ContainerPage>
      <Header rightElement={<RightElementHeader/>}/>
      <StudentHomePage/>
      <Footer/>
    </ContainerPage>
  );
};