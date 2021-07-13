import React from 'react';
import {
    makeStyles, Dialog, Grid,
} from '@material-ui/core';
import Classnames from 'classnames';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
    paper:{
        borderRadius: 16,
        color:'#fff' ,
        border: 'none',
    },
    container: {
        overflow: 'hidden',
    },
    dialogContent: {
        overflow: 'auto',
        height: '100%',
        marginTop: theme.spacing(1),
        '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
        },
    },
}));

const Popup = ({
                                    children, open, onClose, className, ...props
                                }) => {
    const classes = useStyles();
    return (
        <Dialog
            open={open}
            keepMounted
            classes={{
                paper: Classnames(classes.paper, className),
            }}
            {...props}
        >
            <Grid container direction="column" wrap="nowrap" className={classes.container}>
                    <Grid item>
                        <Header onClose={onClose} />
                    </Grid>
                <Grid item className={ classes.dialogContent}>
                    {children}
                </Grid>
            </Grid>
        </Dialog>
    );
};
export default Popup;
