import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { assign } from 'lodash';
import * as Highcharts from 'highcharts/js/highcharts.js';
import { ChartOptions } from './chart-options';

export interface HeatmapOptions {
  xTitle: string;
  xCategories: string[];
  yTitle: string;
  yCategories: string[];
  data: {
    van: number[][][],
    sim: number[][][],
    spl: number[][][],
    per: number[][][],
  };
}

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit, OnChanges {

  @Input() heatmapOptions: HeatmapOptions;

  opts = {
    p_van: assign({ title: { 'text': '<b>Vanilla</b> Precision' } }, ChartOptions.heatmapChart),
    p_sim: assign({ title: { 'text': '<b>Simple</b> Precision' } }, ChartOptions.heatmapChart),
    p_spl: assign({ title: { 'text': '<b>Splitter</b> Precision' } }, ChartOptions.heatmapChart),
    p_per: assign({ title: { 'text': '<b>Perfect</b> Precision' } }, ChartOptions.heatmapChart),
    r_van: assign({ title: { 'text': '<b>Vanilla</b> Recall' } }, ChartOptions.heatmapChart),
    r_sim: assign({ title: { 'text': '<b>Simple</b> Recall' } }, ChartOptions.heatmapChart),
    r_spl: assign({ title: { 'text': '<b>Splitter</b> Recall' } }, ChartOptions.heatmapChart),
    r_per: assign({ title: { 'text': '<b>Perfect</b> Recall' } }, ChartOptions.heatmapChart),
  };

  pVanHeatmapChart: Highcharts.ChartObject;
  pSimHeatmapChart: Highcharts.ChartObject;
  pSplHeatmapChart: Highcharts.ChartObject;
  pPerHeatmapChart: Highcharts.ChartObject;
  rVanHeatmapChart: Highcharts.ChartObject;
  rSimHeatmapChart: Highcharts.ChartObject;
  rSplHeatmapChart: Highcharts.ChartObject;
  rPerHeatmapChart: Highcharts.ChartObject;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'heatmapOptions') {
        const chng = changes[propName];
        this.onHeatmapOptionsChange(chng.currentValue);
      }
    }
  }

  private onHeatmapOptionsChange(heatmapOptions: any) {
    this.heatmapOptions = heatmapOptions;
    this.setHeatmapOptions(this.pVanHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.van[0]);
    this.setHeatmapOptions(this.pSimHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.sim[0]);
    this.setHeatmapOptions(this.pSplHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.spl[0]);
    this.setHeatmapOptions(this.pPerHeatmapChart, heatmapOptions, 'Precision', heatmapOptions.data.per[0]);
    this.setHeatmapOptions(this.rVanHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.van[1]);
    this.setHeatmapOptions(this.rSimHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.sim[1]);
    this.setHeatmapOptions(this.rSplHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.spl[1]);
    this.setHeatmapOptions(this.rPerHeatmapChart, heatmapOptions, 'Recall', heatmapOptions.data.per[1]);
  }

  private setHeatmapOptions(chart: Highcharts.ChartObject, options: HeatmapOptions, seriesName: string, data: number[][]) {
    if (chart) {
      chart.xAxis[0].setTitle({ text: options.xTitle });
      chart.xAxis[0].setCategories(options.xCategories);
      chart.yAxis[0].setTitle({ text: options.yTitle });
      chart.yAxis[0].setCategories(options.yCategories);
      chart.series[0].update({ name: seriesName });
      chart.series[0].setData(data);
    }
  }
}
