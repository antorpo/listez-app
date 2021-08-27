import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader, Alert } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "./store/slices/securitySlice";
import { routes } from "./routes";

export const App = () => {
  const loader = useSelector((state) => state.security.loading);
  const alert = useSelector((state) => state.security.alert);
  const dispatch = useDispatch();

  const handleCloseAlert = () => {
    dispatch(showAlert({ ...alert, open: false }));
  };

  return (
    <Router>
      <Loader loading={loader} />
      <Alert {...alert} handleClose={handleCloseAlert} />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

/*
  return (
    <Router>
      <Loader loading={loader} />
      <Alert {...alert} handleClose={handleCloseAlert} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignIn} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
*/
