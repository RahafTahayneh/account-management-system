import React from 'react';
import _ from 'lodash';
import {
    IconButton, makeStyles, Menu, MenuItem,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useOptions } from './hooks';
import Close from "../../close/Close";
import {observer} from "mobx-react";
import {AccountsStore} from "../../../../../store/account";

const useStyles = makeStyles(() => ({
    root: {
        fontSize: 12,
    },
    padding: {
        padding: 'unset !important',
    },
    paper: {
        width: '13rem',
        padding: 0,
        borderRadius: 6,
    },
    iconBtn: {
        height: '3rem',
        width: '3rem',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        padding: 5,
    },
    icon: {
        fontSize: 26,
    },
}));


const AccountMenu = observer(({ account }) => {
    const classes = useStyles();
    const options = useOptions(account);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [close, setClose] = React.useState(false);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onClick = React.useCallback(async (option) => {
        switch (option) {
            case 'approved':
                await AccountsStore.update(account.id, {status: 'approved'})
            case 'closed':
                setClose(true)
            case 'funded':
                await AccountsStore.update(account.id, {status: 'funded'})
            default: return;
        }
        handleClose();
    }, [account]);

    return (
        <>
            <div>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    className={classes.iconBtn}
                    onClick={handleClick}
                >
                    <MoreVertIcon className={classes.icon} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    MenuListProps={{
                        classes: {
                            padding: classes.padding,
                        },
                    }}
                    open={open}
                    onClose={handleClose}
                    classes={{
                        paper: classes.paper,
                    }}
                >
                    {_.map(options, (option) => (
                        <MenuItem key={option.key} className={classes.root} onClick={()=> onClick(option.key)}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <Close account={account} open={close} onClose={()=> setClose(false)} />
        </>
    );
});

export default AccountMenu;
