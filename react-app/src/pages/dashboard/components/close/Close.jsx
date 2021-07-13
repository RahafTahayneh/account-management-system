import React from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import SVG from 'react-inlinesvg';
import Classnames from 'classnames';
import { GButton } from '../../../../uikit/button'
import warning from '../close/assets/warning.svg';
import {AccountsStore} from "../../../../store/account";
import {observer} from "mobx-react";
import { Popup } from '../../../../components/popup'

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#000',
        padding: theme.spacing(1, 2.6, 3.6),
        position: 'relative',
    },
    popup: {
        border: `solid 1px ${theme.palette.error.main}`,
        background: '#fcede9',
    },
    content: {
        flexGrow: 2,
        textAlign: 'center',
        width: '25rem',
        height: '25rem',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
        },
    },
    icon: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
        animation: '$glow 1s infinite alternate',
        borderRadius: '50%',
        width: 100,
        height: 100,
        color: theme.palette.success.main,
    },
    label: {
        fontSize: 14,
        color: '#192233',
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: theme.spacing(1, 5, 3.6),
        zIndex: 100,
        width: '100%',
        background: '#fcede9',
    },
    btn: {
        fontWeight: 600,
        boxShadow: 'unset',
        padding: `${theme.spacing(0.8, 5)} !important`,
        '& span': {
            textTransform: 'uppercase',
            fontSize: 12,
        },
    },
    cancelBtn: {
        backgroundColor: '#fff !important',
        color: '#787a7e',
    },
    deleteBtn: {
        color: '#fff',
        backgroundColor: `${theme.palette.error.main} !important`,
    },
    '@keyframes glow': {
        '0%': {
            boxShadow: '0 0 2rem -2rem rgba(236, 79, 43, 0.2)',
        },
        '100%': {
            boxShadow: ' 0 0 2rem 2rem rgba(236, 79, 43, 0.2)',
        },
    },
}));


const Close = observer(({ onClose, open, account }) => {
    const classes = useStyles();
    const onDelete = React.useCallback(() => {
        void AccountsStore.update(account.id, {status: 'closed'})
        onClose();
    }, [account]);

    return (
        <Popup open={open} onClose={() => onClose()} className={classes.popup}>
            <Grid container direction="column" justify="center" className={classes.root}>
                <Grid item className={classes.content}>
                    <Grid container direction="column" justify="center" spacing={2}>
                        <Grid item>
                            <SVG src={warning} className={classes.icon} />
                        </Grid>
                        <Grid item className={classes.label}>
                            Are you sure you want to close this account
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" alignItems="center" wrap={'nowrap'} className={classes.footer}>
                    <Grid item>
                        <Button
                            className={Classnames(classes.btn, classes.cancelBtn)}
                            fullWidth
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <GButton
                            loading={AccountsStore.loading}
                            className={Classnames(classes.btn, classes.deleteBtn)}
                            fullWidth
                            onClick={onDelete}
                        >
                            Delete
                        </GButton>
                    </Grid>
                </Grid>
            </Grid>
        </Popup>
    );
});

export default Close;
