import { Main, Login, SignIn, NotFound } from "./pages";

export const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: SignIn,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];

