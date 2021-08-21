import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertContainer = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const Alert = ({ open, type, message, handleClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <AlertContainer severity={type} onClose={handleClose}>
          {message}
        </AlertContainer>
      </Snackbar>
    </div>
  );
};
