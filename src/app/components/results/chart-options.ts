import * as Highcharts from 'highcharts/js/highcharts.js';

export class ChartOptions {

    public static prColumnChart: Highcharts.Options = {
        xAxis: { categories: ['Vanilla', 'Simple', 'Splitter', 'Perfect'] },
        yAxis: [{ title: { text: null }, max: 1, type: 'percentage' }],
        series: [
            { id: 'precision', type: 'column', name: 'Precision' },
            { id: 'recall', type: 'column', name: 'Recall' },
        ],
        plotOptions: {
            column: {
                pointPadding: 0,
            }
        },
        credits: { enabled: false }
    };
}
