/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  obtenerCursos,
  generarError,
  generarAlerta
} from "../../store/actions/coursesActions";
import {showLoading} from '../../store/slices/securitySlice'

export const Prueba = (props) => {
  const cursos = useSelector((state) => state.courses.coursesList);
  const [texto, setTexto] = useState('');
  const dispatch = useDispatch();

  const handleClickObtenerCursos = () => {
    dispatch(obtenerCursos());
  };

  const handleClickGenerarError = () => {
    dispatch(generarError());
  };

  const handleClickGenerarAlerta = () => {
    dispatch(generarAlerta(texto));
  }

  const handleClickShowLoading = () => {
    dispatch(showLoading(true))
  }
  
  useEffect(() => {
    console.log("Prueba cursos:", cursos);
  });

  return (
    <>
      <h1>Componente prueba funcionando</h1>
      <button onClick={handleClickObtenerCursos}>Obtener Cursos</button>
      <button onClick={handleClickGenerarError}>Generar Error</button>
      <input type="text" value={texto} onChange={e => setTexto(e.target.value)} />
      <button onClick={handleClickGenerarAlerta}>Mostrar alerta</button>
      <button onClick={handleClickShowLoading}>Mostrar Loader</button>
    </>
  );
};

//import { connect } from "react-redux";
// const mapStateToProps = (state) => ({})
// const mapDispatchToProps = (dispatch) => ({})
// export default connect(mapStateToProps, mapDispatchToProps)(Prueba);
