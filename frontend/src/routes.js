import { Main, Login, SignIn, NotFound, TutorInformation } from "./pages";

export const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/IniciarSesion",
    component: Login,
    exact: true,
  },
  {
    path: "/Registro",
    component: SignIn,
    exact: true,
  },
  {
    path: "/InformacionTutor",
    component: TutorInformation,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];
