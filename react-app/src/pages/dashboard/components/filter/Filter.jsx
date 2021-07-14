import React from "react";
import { observer } from "mobx-react";
import { Grid , makeStyles} from "@material-ui/core";
import FilteredAccounts from "./components/FilteredAccounts";

const useStyles = makeStyles((theme)=> ({
    root:{
        margin: theme.spacing(4, 0)
    }
}));

const Filter = observer(({onCheck}) => {
    const classes = useStyles();
    return (
            <Grid item container direction={'column'} className={classes.root} >
                <FilteredAccounts onCheck={onCheck}/>
            </Grid>
    );
});

export default Filter;