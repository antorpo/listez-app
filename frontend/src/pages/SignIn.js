import React from "react";
import { ContainerPage, Header } from "../components";
import Footer from "../components/Footer/Footer";
import { SignInPage } from "../modules/SignIn/SignInPage/SignInPage"


export const SignIn = () => {
  return (
    <ContainerPage>
      <Header/>
      <SignInPage/>
      <Footer/>
    </ContainerPage>
  );
};
