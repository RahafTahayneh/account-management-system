import React from "react";
import { observer } from "mobx-react";
import _ from "lodash";
import { Grid , makeStyles, FormControl, FormControlLabel, FormGroup, Checkbox} from "@material-ui/core";
import {AccountsStore} from "../../../../../store/account";

const useStyles = makeStyles((theme)=> ({
    root:{

    },
    form:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    label:{
        marginRight : theme.spacing(3),
        '& span':{
            fontSize: 14
        }
    },
    icon:{
        color: theme.palette.primary.main
    }
}));

const FilterAccounts = observer(({onCheck}) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        pending: false,
        funded: false,
        closed: false,
        approved: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    React.useEffect(()=> {
        const checkedOptions = Object.keys(state).filter(key => state[key]===true)
        const filterAccounts = _.filter(AccountsStore.accounts, (account) => _.includes(checkedOptions, account.status))
        if(!_.isEmpty(filterAccounts))
                onCheck(filterAccounts, false)
        else if(_.isEmpty(checkedOptions) && _.isEmpty(filterAccounts))
            onCheck(AccountsStore.accounts, false)
        else
            onCheck(filterAccounts, true)

    }, [state]);

    const { pending, funded, approved, closed } = state;
    return (
        <Grid container direction={'column'} className={classes.root} >
            <FormControl component="fieldset">
                <FormGroup classes={{root: classes.form}}>
                    <FormControlLabel
                        classes={{root: classes.label}}
                        control={
                            <Checkbox checked={pending} onChange={handleChange} name="pending" classes={{root: classes.icon}}/>
                        }
                        label="Pending"
                    />
                    <FormControlLabel
                        classes={{root: classes.label}}
                        control={
                            <Checkbox checked={funded} onChange={handleChange} name="funded" classes={{root: classes.icon}}/>
                        }
                        label="Funded"
                    />
                    <FormControlLabel
                        classes={{root: classes.label}}
                        control={
                            <Checkbox
                                checked={approved}
                                onChange={handleChange}
                                name="approved"
                                classes={{root: classes.icon}}
                            />
                        }
                        label="Approved"
                    />
                    <FormControlLabel
                        classes={{root: classes.label}}
                        control={
                            <Checkbox
                                checked={closed}
                                onChange={handleChange}
                                name="closed"
                                classes={{root: classes.icon}}
                            />
                        }
                        label="Closed"
                    />
                </FormGroup>
            </FormControl>
        </Grid>
    );
});

export default FilterAccounts;