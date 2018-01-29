import * as Highcharts from 'highcharts/js/highcharts.js';

export class ChartOptions {

    public static heatmapChart: Highcharts.Options = {
        chart: { type: 'heatmap' },
        xAxis: { categories: [] },
        yAxis: { categories: [] },
        series: [{
            borderWidth: 1,
            dataLabels: {
                enabled: false,
                color: '#000000'
            }
        }],
        colorAxis: {
            min: 0,
            max: 1,
            stops: [[0, '#EF9A9A'], [0.5, '#FFF59D'], [1, '#A5D6A7']]
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'top',
            y: 27,
            symbolHeight: 140
        },
        tooltip: {
            formatter: function () {
                return '(<b>' + this.series.xAxis.categories[this.point.x] + '</b> : ' +
                    '<b>' + this.series.yAxis.categories[this.point.y] + '</b>)<br>' +
                    this.series.name + ': <b>' + this.point.value + '</b>';
            }
        },
        credits: { enabled: false }
    };
}
