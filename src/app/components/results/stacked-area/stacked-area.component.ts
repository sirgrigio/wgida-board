import { ChartUtils } from 'app/utils/ChartUtils';
import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ChartOptions } from './chart-options';
import { ICommunicationComposition } from 'app/services/dataset/dataset.service';
import * as Highcharts from 'highcharts/js/highcharts.js';
import { assign, keys } from 'lodash';

export interface StackedAreaOptions {
  xTitle: string;
  xCategories: string[];
  data: {
    van: ICommunicationComposition[],
    sim: ICommunicationComposition[],
    spl: ICommunicationComposition[],
    per: ICommunicationComposition[],
  };
}

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.scss']
})
export class StackedAreaComponent implements OnInit, OnChanges, OnDestroy {

  @Input() stackedAreaOptions: StackedAreaOptions;

  opts = {
    m_van: assign({ title: { 'text': '<b>Vanilla</b> Messages' } }, ChartOptions.stackedAreaChart),
    p_van: assign({ title: { 'text': '<b>Vanilla</b> Payloads' } }, ChartOptions.stackedAreaChart),
    m_sim: assign({ title: { 'text': '<b>Simple</b> Messages' } }, ChartOptions.stackedAreaChart),
    p_sim: assign({ title: { 'text': '<b>Simple</b> Payloads' } }, ChartOptions.stackedAreaChart),
    m_spl: assign({ title: { 'text': '<b>Splitter</b> Messages' } }, ChartOptions.stackedAreaChart),
    p_spl: assign({ title: { 'text': '<b>Splitter</b> Payloads' } }, ChartOptions.stackedAreaChart),
    m_per: assign({ title: { 'text': '<b>Perfect</b> Messages' } }, ChartOptions.stackedAreaChart),
    p_per: assign({ title: { 'text': '<b>Perfect</b> Payloads' } }, ChartOptions.stackedAreaChart),
  };

  mVanStackedAreaChart: Highcharts.ChartObject;
  pVanStackedAreaChart: Highcharts.ChartObject;
  mSimStackedAreaChart: Highcharts.ChartObject;
  pSimStackedAreaChart: Highcharts.ChartObject;
  mSplStackedAreaChart: Highcharts.ChartObject;
  pSplStackedAreaChart: Highcharts.ChartObject;
  mPerStackedAreaChart: Highcharts.ChartObject;
  pPerStackedAreaChart: Highcharts.ChartObject;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    ChartUtils.clearChart(this.mVanStackedAreaChart);
    ChartUtils.clearChart(this.pVanStackedAreaChart);
    ChartUtils.clearChart(this.mSimStackedAreaChart);
    ChartUtils.clearChart(this.pSimStackedAreaChart);
    ChartUtils.clearChart(this.mSplStackedAreaChart);
    ChartUtils.clearChart(this.pSplStackedAreaChart);
    ChartUtils.clearChart(this.mPerStackedAreaChart);
    ChartUtils.clearChart(this.pPerStackedAreaChart);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'stackedAreaOptions') {
        const chng = changes[propName];
        this.onStackedAreaOptionsChange(chng.currentValue);
      }
    }
  }

  private onStackedAreaOptionsChange(stackedAreaOptions: any) {
    this.stackedAreaOptions = stackedAreaOptions;
    this.setStackedAreaOptions(this.mVanStackedAreaChart, this.pVanStackedAreaChart,
      stackedAreaOptions, 'Recall', stackedAreaOptions.data.van);
    this.setStackedAreaOptions(this.mSimStackedAreaChart, this.pSimStackedAreaChart,
      stackedAreaOptions, 'Recall', stackedAreaOptions.data.sim);
    this.setStackedAreaOptions(this.mSplStackedAreaChart, this.pSplStackedAreaChart,
      stackedAreaOptions, 'Recall', stackedAreaOptions.data.spl);
    this.setStackedAreaOptions(this.mPerStackedAreaChart, this.pPerStackedAreaChart,
      stackedAreaOptions, 'Recall', stackedAreaOptions.data.per);
  }

  private setStackedAreaOptions(
    mChart: Highcharts.ChartObject,
    pChart: Highcharts.ChartObject,
    options: StackedAreaOptions,
    seriesName: string,
    data: ICommunicationComposition[]) {
    if (mChart) {
      mChart.xAxis[0].setTitle({ text: options.xTitle });
      mChart.xAxis[0].setCategories(options.xCategories);
      (mChart.get('identify') as Highcharts.SeriesObject).setData(data.map(e => e.messages['identify'] * 100));
      (mChart.get('freq_req') as Highcharts.SeriesObject).setData(data.map(e => e.messages['freq_req'] * 100));
      (mChart.get('freq_rep') as Highcharts.SeriesObject).setData(data.map(e => e.messages['freq_rep'] * 100));
      (mChart.get('verify') as Highcharts.SeriesObject).setData(data.map(e => e.messages['verify'] * 100));
      (mChart.get('active_gi') as Highcharts.SeriesObject).setData(data.map(e => e.messages['active_gi'] * 100));
    }
    if (pChart) {
      pChart.xAxis[0].setTitle({ text: options.xTitle });
      pChart.xAxis[0].setCategories(options.xCategories);
      (pChart.get('identify') as Highcharts.SeriesObject).setData(data.map(e => e.payloads['identify'] * 100));
      (pChart.get('freq_req') as Highcharts.SeriesObject).setData(data.map(e => e.payloads['freq_req'] * 100));
      (pChart.get('freq_rep') as Highcharts.SeriesObject).setData(data.map(e => e.payloads['freq_rep'] * 100));
      (pChart.get('verify') as Highcharts.SeriesObject).setData(data.map(e => e.payloads['verify'] * 100));
      (pChart.get('active_gi') as Highcharts.SeriesObject).setData(data.map(e => e.payloads['active_gi'] * 100));
    }
  }
}
