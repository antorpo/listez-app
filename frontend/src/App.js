import React, {useEffect} from "react";
import { useSelector } from "react-redux";

export const App = () => {
  const state = useSelector(state => state);

  useEffect(() => {
    console.log(state);
  }, [])

  return (
   <h1>Hola mundo</h1>
  );
};
