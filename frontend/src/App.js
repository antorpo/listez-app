import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader, Alert, Modal } from "./components";
import { mostrarAlerta, mostrarModal } from "./store/actions/securityActions";
import { routes } from "./routes";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const handleCloseAlert = () => {
    props.mostrarAlerta({ ...props.alert, open: false });
  };

  const handleCloseModal = () => {
    props.mostrarModal({open: false, content: null});
  };
 
  const contenido = (
    <>
    <h1>Antonio</h1>
        <p>aslkdjaslkdj askljdlaksjdklasjdkl askldj klajsdkljaskldj lkasjdklasjdlkasj lkajsdlkasjlkj dlka
          klasjdklajsdlkasjd  aklsdjklasjdlka jdkljaskdljaskldjkla skjdklasjd
        </p>
        <h3>GGGGGGG</h3>
        <button>enviar</button>
    </>
  )

  return (
    <Router>
      <Loader loading={props.loader} divId="loader" />
      <Modal divId="modal" open={props.modal.open} closeModal={handleCloseModal} content={contenido} />
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
    modal: state.security.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mostrarAlerta: (alert) => dispatch(mostrarAlerta(alert)),
    mostrarModal: (modal) => dispatch(mostrarModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
