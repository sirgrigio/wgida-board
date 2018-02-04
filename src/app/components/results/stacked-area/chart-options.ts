import * as Highcharts from 'highcharts/js/highcharts.js';

export class ChartOptions {

    public static stackedAreaChart: Highcharts.Options = {
        chart: { type: 'area' },
        xAxis: { tickmarkPlacement: 'on', categories: [] },
        yAxis: {
            title: { text: null },
            min: 0,
            type: 'percentage',
            labels: {
                format: '{value}%'
            }
        },
        series: [
            { id: 'identify', name: 'Identify' },
            { id: 'freq_req', name: 'FreqReq' },
            { id: 'freq_rep', name: 'FreqRep' },
            { id: 'verify', name: 'Verify' },
            { id: 'active_gi', name: 'ActiveGI' },
        ],
        plotOptions: {
            area: {
                stacking: 'normal',
            }
        },
        tooltip: {
            formatter: function () {
                return '<span class="highcharts-color-' + this.colorIndex + '">\u25CF</span> ' +
                    this.series.name + ': <b>' +
                    Highcharts.numberFormat((this.y), 4, '.') + '%</b><br/><b>' +
                    Highcharts.numberFormat((this.y / this.point.stackTotal) * 100, 2, '.') + '%</b> of total';
            }
        },
        credits: { enabled: false }
    };
}
