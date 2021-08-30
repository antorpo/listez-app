import React from "react";
import { ContainerPage, Header, LoginButton } from "../components";
import Footer from "../components/Footer/Footer";
import { FirstSection, SecondSection,ThirdSection } from "../modules/Main/components";

export const Main = () => {
  return (
    <ContainerPage>
      <Header rightElement={<LoginButton />}></Header>
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <Footer/>
    </ContainerPage>
  );
};
