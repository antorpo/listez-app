import React from "react";
import { TutorCard } from "../components";
export const SignIn = () => {
  const tutor = {
    name: "Pepito",
    apellido: "Perez",
    descripcion: "m kasjdlsajdk jasld jaldj alkdj klajklwjliqoeiqwuieouaosdsda",
    calificacion: 5,
  };

  return <TutorCard tutor={tutor}></TutorCard>;
};
