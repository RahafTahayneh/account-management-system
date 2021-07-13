import React from "react";
import {observer} from "mobx-react";
import {Grid, makeStyles} from "@material-ui/core";
import {AccountsTable, Filter, Overview} from "./components";
import {AccountsStore} from "../../store/account";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        padding: '2% 10%',
        overflow: 'auto'
    }
}));

const Dashboard = observer(() => {
    const classes = useStyles();
    const [filteredList, setFilteredList] = React.useState([])
    React.useEffect(() => {
        if (!AccountsStore.loading) {
            setFilteredList(AccountsStore.filteredAccounts)
        }
    }, [AccountsStore.loading])

    const [empty, setEmpty] = React.useState(false);

    return (
        <Grid container direction={'column'} wrap='nowrap' className={classes.root} spacing={2}>
            <Grid item>
                <Overview/>
            </Grid>
            <Grid item>
                <Filter onCheck={(arg1, arg2) => {
                    setFilteredList(arg1)
                    setEmpty(arg2)
                }}/>
            </Grid>
            <Grid item>
                <AccountsTable accounts={filteredList} isEmpty={empty}/>
            </Grid>
        </Grid>
    );
});

export default Dashboard;