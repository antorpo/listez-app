import React from "react";
import { ContainerPage, Header } from "../components";
import Footer from "../components/Footer/Footer";
import { TutorInformationPage } from "../modules/TutorInformation/TutorInformationPage";

export const TutorInformation = () =>{
    return(
        <ContainerPage>
            <Header/>
            <TutorInformationPage/>
            <Footer/>
        </ContainerPage>        
    )
}

