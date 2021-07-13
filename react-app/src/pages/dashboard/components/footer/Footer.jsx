import React from 'react';
import {
    Grid, makeStyles, ButtonGroup, Button,
} from '@material-ui/core';
import { observer } from 'mobx-react';
import Pagination from '@material-ui/lab/Pagination';
import  _ from 'lodash';
import {AccountsStore} from "../../../../store/account";

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        borderTop: 'solid 4px #f8f9fc',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        padding: theme.spacing(2),
        position: 'relative'
    },
    content: {
        padding: theme.spacing(1),
        position: 'absolute',
        left: 0,
    },
    showText: {
        color: '#192233',
        fontSize: 14,
    },
    pagination: {
        color: theme.palette.secondary.main,
    },
    tablePagination: {
        width: 'fit-content',
    },
    tablePaginationCaption: {
        '& > li>button': {
            color: '#192233',
            borderRadius: '1.3rem',
            fontSize: 12,
        },
        '&>li>button>svg': {
            fill: theme.palette.secondary.main,
        },
        '&>li>div': {
            color: '#192233',
            fontSize: 12,
        },
    },
}));

const Footer = observer(() => {
    const classes = useStyles();

    return (
        <Grid container direction="row" wrap="nowrap" alignItems="center" justify="center" className={classes.footerContainer}>
            <Grid item className={classes.content}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item className={classes.showText}>
                        Show
                    </Grid>
                    <Grid item>
                        <ButtonGroup color="secondary">
                            <Button
                                variant={AccountsStore.pageSize === 15 ? 'contained' : 'outlined'}
                                onClick={() => void AccountsStore.setPageSize(15)}
                            >
                                15
                            </Button>
                            <Button
                                variant={AccountsStore.pageSize === 25 ? 'contained' : 'outlined'}
                                onClick={() => void AccountsStore.setPageSize(25)}
                            >
                                25
                            </Button>
                            <Button
                                variant={AccountsStore.pageSize === 50 ? 'contained' : 'outlined'}
                                onClick={() => void AccountsStore.setPageSize(50)}
                            >
                                50
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.pagination}>
                <Pagination
                    count={_.ceil(AccountsStore.count / AccountsStore.pageSize)}
                    color="secondary"
                    classes={{
                        root: classes.tablePagination,
                        ul: classes.tablePaginationCaption,
                    }}
                    onChange={(e, page) => void AccountsStore.setPage(page - 1)}
                    page={AccountsStore.page + 1}
                />
            </Grid>
        </Grid>
    );
});

export default Footer;
