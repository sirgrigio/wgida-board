import * as Highcharts from 'highcharts/js/highcharts.js';

export class ChartUtils {

    public static clearChart(chart: Highcharts.ChartObject) {
        if (chart) {
            chart.series.forEach(s => {
                s.setData(null, false, null, false);
            });
        }
    }
}
