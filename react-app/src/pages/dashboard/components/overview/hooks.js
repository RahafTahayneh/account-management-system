import * as am4core from "@amcharts/amcharts4/core";
import React from 'react';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import _ from 'lodash';
import {AccountsStore} from "../../../../store/account";
import {getColorByStatus} from "../../../../utils";

export const useGraphData = () => {
    return React.useMemo(() => {
        const counts = _.reduce(AccountsStore.accounts, (p, account) => {
            const status = account.status;
            if (!p.hasOwnProperty(status)) {
                p[status] = 0;
            }
            p[status]++;
            return p;
        }, {});

        const GroupedAccountStatus = Object.keys(counts).map(k => {
            return {status: k, count: counts[k], color: am4core.color(getColorByStatus(k))};
        });
        return GroupedAccountStatus;
    }, [AccountsStore.accounts, AccountsStore.loading]);
}


am4core.useTheme(am4themes_animated);
export const useGraphRender = () => React.useCallback((container, data) => {
    const chart = am4core.create(container, am4charts.PieChart);
    chart.data = data
    chart.innerRadius = 0

    let pieSeries = chart.series.push(new am4charts.PieSeries());

    pieSeries.dataFields.value = "count";
    pieSeries.dataFields.category = "status";
    pieSeries.slices.template.propertyFields.fill = "color"
    pieSeries.labels.template.disabled = true;
    pieSeries.labels.template.text = '';

    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

}, []);


