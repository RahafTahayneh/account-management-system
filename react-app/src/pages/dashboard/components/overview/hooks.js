import * as am4core from "@amcharts/amcharts4/core";
import React from 'react';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Color } from '@amcharts/amcharts4/core';
import {AccountsStore} from "../../../../store/account";
import _ from 'lodash';

export const useGraphData = () => {
    return React.useMemo(() => {
        const counts =_.reduce(AccountsStore.accounts, (p, account) => {
            const status = account.status;
            if (!p.hasOwnProperty(status)) {
                p[status] = 0;
            }
            p[status]++;
            return p;
        }, {});

        const GroupedAccountStatus = Object.keys(counts).map(k => {
            return {status: k, count: counts[k]}; });
        return GroupedAccountStatus;
        }, [AccountsStore.accounts, AccountsStore.loading]);
}


am4core.useTheme(am4themes_animated);
export const useGraphRender = () => React.useCallback((container, data) => {
    const chart = am4core.create(container, am4charts.PieChart);
    chart.data = data
    chart.innerRadius = 0

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    const pending =  new Color({r:255, g: 132,b: 0 });
    const approved = new Color({
        r: 38,
        g: 210,
        b: 176,
    })
    const closed = new Color({ r: 251, g: 94, b: 80 })
    const funded = new Color({ r: 66, g: 133, b: 244 })
    const approvedArr = _.filter(data, field => field.status === 'approved')
    const pendingArr = _.filter(data, field => field.status === 'pending')
    const closedArr = _.filter(data, field => field.status === 'closed')
    const fundedArr = _.filter(data, field => field.status === 'funded')
    console.log(approvedArr, pendingArr, closedArr, fundedArr)
    const colors = _.compact([!_.isEmpty(pendingArr) && pending, !_.isEmpty(approvedArr) && approved, !_.isEmpty(closedArr) && closed, !_.isEmpty(fundedArr) && funded])
    pieSeries.colors.list =colors;

    pieSeries.dataFields.value = "count";
    pieSeries.dataFields.category = "status";
    pieSeries.labels.template.disabled = true;
    pieSeries.labels.template.text = '';

    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

}, []);


