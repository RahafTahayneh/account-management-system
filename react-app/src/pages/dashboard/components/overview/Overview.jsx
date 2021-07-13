import React from "react";
import {observer} from "mobx-react";
import {Grid} from "@material-ui/core";
import AnalyticsGraph from "./AnalyticsGraph";
import {AccountsStore} from "../../../../store/account";
import {useGraphData, useGraphRender} from "./hooks";
import TotalAccountsBalance from "./TotalAccountsBalance";
import {CollapsableSection} from "../../../../components/collapse";


const Overview = observer(() => {
    return (
        <CollapsableSection title={'Overview'} expand={true}>
            <Grid container direction={'column'} wrap={'nowrap'} spacing={2}>
                <Grid item>
                    <AnalyticsGraph
                        onRender={useGraphRender()}
                        data={useGraphData()}
                        loading={AccountsStore.loading}
                        minHeight="25rem"/>

                </Grid>
                <Grid item>
                    <TotalAccountsBalance/>
                </Grid>
            </Grid>
        </CollapsableSection>
    );
});

export default Overview;