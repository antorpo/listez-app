import React from 'react';
import '../assets/sass/Navbar.scss';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function Content() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.toolbar} />
            <Typography paragraph>
                Holi Soy un texto de prueba, Mira mi responsive.
            </Typography>
        </main >
    );
}

export default Content;