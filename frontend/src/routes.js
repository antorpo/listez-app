
import { Main, Login, SignIn, StudentHome, NotFound, TutorHome, TutorInformation } from "./pages";

export const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/iniciarSesion",
    component: Login,
    exact: true,
  },
  {
    path: "/crearCuenta",
    component: SignIn,
    exact: true,
  },
  {
    path: "/inicioEstudiante",
    component: StudentHome,
    exact: true,
  },
  {
    path: "/inicioTutor",
    component: TutorHome,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];
