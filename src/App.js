import React from "react";
import "./assets/sass/App.scss";
import Navbar from "./components/Navbar";
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Content from "./components/Content";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3AAFA9'
    },
    secondary: {
      main: '#FFFFF'
    }
  }
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Content></Content>
    </ThemeProvider>
  );
};
