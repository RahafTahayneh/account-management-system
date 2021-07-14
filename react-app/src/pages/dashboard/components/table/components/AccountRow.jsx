import React from 'react';
import {observer} from 'mobx-react';
import Classnames from 'classnames';
import {makeStyles,} from '@material-ui/core';
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
        color: ({color}) => `${color}`,
        borderRadius: '0 0.5rem 0.5rem 0',
        textTransform: 'capitalize'
    },
    item: {
        backgroundColor: '#f7f7f7',
    },
}));


const AccountRow = observer(({account}) => {
    const color = getColorByStatus(account.status)

    const classes = useStyles({color});

    return (
        <tr className={classes.root}>
            <td className={Classnames(classes.item, classes.name)}>
                {account.id}
            </td>
            <td className={classes.item}>
                {account.balance.toLocaleString() || '0'.toLocaleString()}
            </td>
            <td className={classes.item}>
                <div className={classes.status}>
                    {account.status}
                </div>
            </td>
            <td>
                {(account.status === 'closed' || (account.status === 'funded' && account.balance !== 0)) ? null :
                    <AccountMenu account={account}/>}
            </td>
        </tr>

    );
});

export default AccountRow;
