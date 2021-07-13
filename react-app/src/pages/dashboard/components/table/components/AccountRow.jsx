import React from 'react';
import { observer } from 'mobx-react';
import Classnames from 'classnames';
import { makeStyles,  } from '@material-ui/core';
import AccountMenu from './AccountMenu';
import {getColorByStatus} from "../../../../../utils";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        textAlign: 'left',
    },
    name: {
        borderRadius: '0.5rem 0rem 0rem 0.5rem',
    },
    status: {
        color: ({ color }) =>  `${color} !important`,
        borderRadius: '0 0.5rem 0.5rem 0',
        textTransform: 'capitalize'
    },
    item: {
        backgroundColor: '#f7f7f7',
    },
}));


const AccountRow = observer(({ account , index}) => {
    const color = getColorByStatus(account.status)

    const classes = useStyles({ color });

    return (
        <tr className={classes.root}>
            <td className={Classnames(classes.item, classes.name)}>
                {index  + 1}
            </td>
            <td className={classes.item}>
                {account.balance.toLocaleString() || '0'.toLocaleString()}
            </td>
            <td className={Classnames(classes.status, classes.item)}>
                {account.status}
            </td>
            <td>
                {(account.status === 'closed' || (account.status==='funded' && account.balance !== 0)) ? null :   <AccountMenu account={account} /> }
            </td>
        </tr>

    );
});

export default AccountRow;
