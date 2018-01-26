import { Component, OnInit } from '@angular/core';
import { Simulation } from 'app/models/simulation.model';
import * as Highcharts from 'highcharts/js/highcharts.js';
import { assign } from 'lodash';
import { ChartOptions } from './chart-options';
import { GlobalIceberg } from 'app/models/global-iceberg.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  simulations: Simulation[];

  options = {
    prColumnChartSliding: assign({
      title: { text: 'Global Iceberg detection in sliding windows' }
    }, ChartOptions.prColumnChart),
    prColumnChartDetected: assign({
      title: { text: 'Global Iceberg detection over whole simulation' }
    }, ChartOptions.prColumnChart),
  };

  prColumnChartSliding: Highcharts.ChartObject;
  prColumnChartDetected: Highcharts.ChartObject;

  constructor() { }

  ngOnInit() {
  }

  onDatasetChange(simulations: Simulation[]) {
    this.simulations = simulations;
    this.updatePRCCSliding();
    this.updatePRCCDetected();
  }

  private updatePRCCSliding() {
    (this.prColumnChartSliding.get('precision') as Highcharts.SeriesObject).setData([
      this.avg(this.simulations.map(s => s.van.precision)),
      this.avg(this.simulations.map(s => s.sim.precision)),
      this.avg(this.simulations.map(s => s.spl.precision)),
      this.avg(this.simulations.map(s => s.per.precision)),
    ]);
    (this.prColumnChartSliding.get('recall') as Highcharts.SeriesObject).setData([
      this.avg(this.simulations.map(s => s.van.recall)),
      this.avg(this.simulations.map(s => s.sim.recall)),
      this.avg(this.simulations.map(s => s.spl.recall)),
      this.avg(this.simulations.map(s => s.per.recall)),
    ]);
  }

  private updatePRCCDetected() {
    const pr_van = this.simulations.map(s => this.prOfDetectedGIs(s.generated, s.van.detected));
    const pr_sim = this.simulations.map(s => this.prOfDetectedGIs(s.generated, s.sim.detected));
    const pr_spl = this.simulations.map(s => this.prOfDetectedGIs(s.generated, s.spl.detected));
    const pr_per = this.simulations.map(s => this.prOfDetectedGIs(s.generated, s.per.detected));
    (this.prColumnChartDetected.get('precision') as Highcharts.SeriesObject).setData([
      this.avg(pr_van.map(e => e[0])),
      this.avg(pr_sim.map(e => e[0])),
      this.avg(pr_spl.map(e => e[0])),
      this.avg(pr_per.map(e => e[0])),
    ]);
    (this.prColumnChartDetected.get('recall') as Highcharts.SeriesObject).setData([
      this.avg(pr_van.map(e => e[1])),
      this.avg(pr_sim.map(e => e[1])),
      this.avg(pr_spl.map(e => e[1])),
      this.avg(pr_per.map(e => e[1])),
    ]);
  }

  private prOfDetectedGIs(generated: GlobalIceberg[], detected: GlobalIceberg[]) {
    const ugen = new Set();
    const udet = new Set();
    generated.forEach(g => ugen.add(g.value));
    detected.forEach(d => udet.add(d.value));
    let tp = 0;
    udet.forEach(e => { if (ugen.has(e)) { tp += 1; } });
    return [tp / Math.max(udet.size, 1), tp / Math.max(ugen.size, 1)];
  }

  private avg(array: any[]) {
    return parseFloat((array.reduce((a, b) => a + b) / array.length).toFixed(3));
  }
}
