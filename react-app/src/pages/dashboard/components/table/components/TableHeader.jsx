import React from 'react';
import { observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '1.2rem',
        color: '#808080',
        opacity: 0.7,
        lineHeight: 1.6,
    },

}));

const TableHeader = observer(({ label }) => {
    const classes = useStyles();

    return (
        <th>
                <Grid container direction="row" alignItems="center" wrap="nowrap" spacing={1}  className={classes.title}>
                        {label}
                </Grid>
        </th>
    );
});

export default TableHeader;
