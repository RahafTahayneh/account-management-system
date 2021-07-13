import React from 'react';
import {Button, Grid, makeStyles,} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: 'solid 1px #dedede',
        padding: theme.spacing(2),
    },
    icon: {
        verticalAlign: 'middle',
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.palette.secondary.main,
    },
    btn: {
        backgroundColor: '#f7f7f7',
        borderRadius: 5,
        border: 'solid 1px #ebebeb',
        textTransform: 'none',
        padding: `${theme.spacing(0.5, 1)} !important`,
        boxShadow: 'unset',
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        color: '#192233',
        lineHeight: 1.56,
    },
}));

const Header = ({onClose}) => {
    const classes = useStyles();
    return (
        <Grid container direction="row" wrap="nowrap" spacing={2} className={classes.root} alignItems="center"
              justify="flex-end">
            <Button onClick={() => onClose()} className={classes.btn} variant="contained">
                <Grid container direction="row" wrap="nowrap" alignItems="center">
                    <Grid item>
                        <CloseIcon className={classes.icon}/>
                    </Grid>
                    <Grid item className={classes.text}>
                       Close
                    </Grid>
                </Grid>
            </Button>
        </Grid>
    );
};
export default Header;
