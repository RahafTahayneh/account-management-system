import * as React from 'react';
import {observer} from 'mobx-react';
import {CircularProgress, Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 2),
        borderRadius: 12,
        boxShadow: '-2px 2px 4px 0 rgba(128, 152, 213, 0.07)',
        border: 'solid 4px #f8f9fc',
        backgroundColor: '#deecf4',
    },
    value: {
        fontSize: 20,
        fontWeight: 600,
        color: '#192233',
        position: 'relative',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    circle:{
        backgroundColor: ({color}) => color,
        borderRadius: '50%',
        height: 10,
        width: 10
    }
}));

const AnalyticsBox = observer(({
                                                    label, value, loading, color
                                                }) => {
    const classes = useStyles({color});

    return (
        <Paper className={classes.root}>
            <Grid container>
                {
                    loading
                        ? <CircularProgress/>
                        : (
                            <Grid className={classes.value} item container xs={12} justify="space-between"
                                  alignItems="center">
                                <Grid item>
                                    {`Total Balance: ${value.toLocaleString() || '0'.toLocaleString()}`}
                                </Grid>
                            </Grid>
                        )
                }
                <Grid item container direction={'row'} alignItems={'center'} className={classes.text} spacing={2} justify={'flex-start'} item xs={12}>
                    <Grid item className={classes.circle} />
                    <Grid item>
                        {label}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
});
export default AnalyticsBox;
