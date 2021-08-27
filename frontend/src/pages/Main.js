import React from "react";
import { Header, LoginButton } from "../components";
import { FirstSection, SecondSection } from "../modules/Main";

export const Main = () => {
  return (
    <div>
      <Header rightElement={<LoginButton />}></Header>
      <FirstSection />
      <SecondSection />
    </div>
  );
};
