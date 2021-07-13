import * as React from 'react';
import {observer} from 'mobx-react';
import {Grid} from "@material-ui/core";
import _ from 'lodash';
import AnalyticsBox from "./AnalyticsBox";
import {AccountsStore} from "../../../../store/account";
import {getColorByStatus} from "../../../../utils";

const TotalAccountsBalance = observer(() => {

    const accountsWithTotalBalance = AccountsStore.getTotalBalancePerAccountStatus()
    return (
        <Grid container direction={'row'} alignItems={'center'} spacing={2}>
            {
                _.map(accountsWithTotalBalance, (account) =>
                    <Grid item key={account.status} xs={6}>
                        <AnalyticsBox label={account.status} value={account.totalBalance} loading={AccountsStore.loading}
                                      color={getColorByStatus(account.status)}/>
                    </Grid>
                )
            }
        </Grid>

    );
});
export default TotalAccountsBalance;
