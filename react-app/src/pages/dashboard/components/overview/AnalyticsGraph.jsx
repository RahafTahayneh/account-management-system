import React from 'react';
import {observer} from 'mobx-react';
import {CircularProgress, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '-2px 2px 4px 0 rgba(128, 152, 213, 0.07)',
        height: '100%',
        width: '100%',
        marginTop: theme.spacing(2),
        borderRadius: 12,
        border: 'solid 4px #f8f9fc',
        backgroundColor: '#deecf4',
    },
    container: {
        minHeight: ({minHeight}) => minHeight,
        width: '100%',
        height: '100%',
        display: ({loading}) => (loading ? 'none' : 'block'),
    },
}));

const AnalyticsGraph = observer(({
                                     loading, data, minHeight, onRender
                                 }) => {
    const classes = useStyles({
        loading,
        minHeight,
    });
    const chartRef = React.useRef(null);
    React.useEffect(() => {
        if (loading || !chartRef.current || !data) return;
        onRender(chartRef.current, data);
    }, [chartRef.current, data, onRender]);

    return (
        <Paper className={classes.root}>
            {
                loading && <CircularProgress/>
            }
            <div ref={chartRef} className={classes.container}/>
        </Paper>
    );
});

export default AnalyticsGraph;
