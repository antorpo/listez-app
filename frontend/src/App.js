import React from "react";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Main from "./pages/Main"
import Login from "./pages/Login";
import SignIn from "./pages/SignIn"

export const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/iniciarSesion" component={Login} />
      <Route exact path="/registrarse" component={SignIn} />
    </Switch>
  );
};
