import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {observer} from "mobx-react";
import { Sidebar } from "../components/sidebar";

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        height: '100%',
        width: '100%',
    },
    body: {
        backgroundColor: '#f1f4f8',
        height: '100%',
        width:  'calc(100% - 240px)',
        marginLeft: 'auto',
        position: 'relative',
        '@media (max-width: 700px)': {
            width: '100% !important'
        },
    },

}))

const Layout = observer(({children}) => {

    const classes = useStyles();

    return (
        <Grid container direction="row" wrap="nowrap" alignItems={'center'} className={classes.root}>
            <Grid item>
                <Sidebar />
            </Grid>
            <Grid className={classes.body} item>
                {children}
            </Grid>
        </Grid>
    )

})

export default Layout;