import React from "react";
import { observer } from "mobx-react";
import { Grid , makeStyles} from "@material-ui/core";
import FilteredAccounts from "./components/FilteredAccounts";
import {CollapsableSection} from "../../../../components/collapse";

const useStyles = makeStyles((theme)=> ({
    root:{
        margin: theme.spacing(4, 0)
    }
}));

const Filter = observer(({onCheck}) => {
    const classes = useStyles();
    return (
        <CollapsableSection title={'Filter your accounts by its status...'}>
            <Grid item container direction={'column'} className={classes.root} >
                <FilteredAccounts onCheck={onCheck}/>
            </Grid>
        </CollapsableSection>
    );
});

export default Filter;