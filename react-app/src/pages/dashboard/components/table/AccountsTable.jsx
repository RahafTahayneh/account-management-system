import React from 'react';
import {CircularProgress, Grid, makeStyles, Paper} from '@material-ui/core';
import _ from 'lodash';
import {observer} from 'mobx-react';
import TableHeader from './components/TableHeader';
import AccountRow from './components/AccountRow';
import {accountsTableHeader} from "./constants";
import {Empty} from "../../../../components/empty";
import {AccountsStore} from "../../../../store/account";
import {Footer} from "../footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(2),
        borderRadius: 12,
        boxShadow: '-2px 2px 4px 0 rgba(128, 152, 213, 0.07)',
        border: 'solid 4px #f8f9fc',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    table: {
        width: '100%',
        textAlign: 'center',
        fontSize: '1.2rem',
        flexGrow: 2,
        borderCollapse: 'separate',
        borderSpacing: theme.spacing(0, 1),
        position: 'relative',
        '& tr': {
            width: '100%',
        },
        '& th': {
            padding: theme.spacing(0.5, 2),
            textAlign: 'left',
        },
        '& td': {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: '#192233',
            '&:last-child': {
                width: 'fit-content',
                padding: theme.spacing(1, 2),

            },
        },
    },
    empty: {
        height: '5rem',
    },
    divider: {
        borderTop: 'solid 4px #f8f9fc',
        position: 'absolute',
    },
}));

const AccountsTable = observer(({accounts, isEmpty}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            {
                AccountsStore.loading ?
                    <CircularProgress size={20}/> :
                    <>
                        <table className={classes.table}>
                            <thead>
                            <tr>
                                {
                                    _.map(accountsTableHeader, (field) => (
                                        <TableHeader key={field.key} label={field.label}/>
                                    ))
                                }
                            </tr>
                            </thead>
                            <tr className={classes.divider}/>

                            <tbody>
                            {
                                isEmpty ?
                                    <tr><Empty/></tr>

                                    :
                                    _.map(accounts, (account, index) => (
                                        <AccountRow key={account.id} account={account} index={index}/>
                                    ))
                            }
                            </tbody>
                        </table>
                        <tr className={classes.empty}/>
                        <tr className={classes.empty}/>
                        <Grid item>
                           <Footer />
                        </Grid>
                    </>
            }
        </Paper>
    );
}
);

export default AccountsTable;
