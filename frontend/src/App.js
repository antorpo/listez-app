import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader, Alert } from "./components";
import { mostrarAlerta } from "./store/actions/securityActions";
import { routes } from "./routes";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const handleCloseAlert = () => {
    props.mostrarAlerta({ ...props.alert, open: false });
  };

  return (
    <Router>
      <Loader loading={props.loader} divId="loader" />
      <Alert {...props.alert} handleClose={handleCloseAlert} />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    loader: state.security.loading,
    alert: state.security.alert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mostrarAlerta: (alert) => dispatch(mostrarAlerta(alert)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
