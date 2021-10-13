import React from "react";
import { ContainerPage, Header } from "../components";
import Footer from "../components/Footer/Footer";
import LoginPage from "../modules/Login/LoginPage/LoginPage";

export const Login = () => {
  return(
    <ContainerPage>
      <Header/>
      <LoginPage/>
      <Footer/>
    </ContainerPage>
  );
};
