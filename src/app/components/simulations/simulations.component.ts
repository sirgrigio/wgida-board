import { Component, OnInit, ViewChild } from '@angular/core';
import { Simulation } from 'app/models/simulation.model';
import { DatasetService } from 'app/services/dataset/dataset.service';
import { IDatasetFilters } from 'app/components/dataset/dataset.component';
import { assign, merge } from 'lodash';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.scss']
})
export class SimulationsComponent implements OnInit {

  @ViewChild('timelineChart') timelineChart;

  rows = [];
  columns = [
    { name: 'Stream', prop: 'size' },
    { name: 'Shift', prop: 'shift' },
    { name: 'Window', prop: 'window' },
    { name: 'Threshold', prop: 'threshold' },
    { name: 'Nodes', prop: 'nodes' },
    { name: 'VAN Pr', prop: 'vanPrecision' },
    { name: 'VAN Re', prop: 'vanRecall' },
    { name: 'SIM Pr', prop: 'simPrecision' },
    { name: 'SIM Re', prop: 'simRecall' },
    { name: 'SPL Pr', prop: 'splPrecision' },
    { name: 'SPL Re', prop: 'splRecall' },
    { name: 'PER Pr', prop: 'perPrecision' },
    { name: 'PER Re', prop: 'perRecall' }
  ];

  timelineData = {
    chartType: 'Timeline',
    dataTable: null,
    options: {
      height: 450
    }
  };

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
  }

  onDatasetChange(event: { dataset: Simulation[], filters: IDatasetFilters }) {
    this.rows = event.dataset.map(s => {
      return {
        size: s.stream.size.toPrecision(2),
        shift: s.stream.shift.toPrecision(2),
        nodes: s.config.nodes,
        window: s.config.window.toPrecision(2),
        threshold: s.config.threshold,
        vanPrecision: s.van.precision.toFixed(3),
        vanRecall: s.van.recall.toFixed(3),
        simPrecision: s.sim.precision.toFixed(3),
        simRecall: s.sim.recall.toFixed(3),
        splPrecision: s.spl.precision.toFixed(3),
        splRecall: s.spl.recall.toFixed(3),
        perPrecision: s.per.precision.toFixed(3),
        perRecall: s.per.recall.toFixed(3),
        simulation: s
      };
    });
  }

  onRowSelected(event: any) {
    this.drawTimeline(event.selected[0].simulation);
  }

  private drawTimeline(simulation: Simulation) {
    let dataTable = [[
      { type: 'string', id: 'Position' },
      { type: 'string', id: 'Name' },
      { type: 'number', id: 'Emergence' },
      { type: 'number', id: 'Melting' }
    ]];
    dataTable = [...dataTable, ...this.distributionRows(simulation)];
    dataTable = [...dataTable, ...this.generatedRows(simulation)];
    dataTable = [...dataTable, ...this.detectedRows(simulation, simulation.van, 'VAN')];
    dataTable = [...dataTable, ...this.detectedRows(simulation, simulation.sim, 'SIM')];
    dataTable = [...dataTable, ...this.detectedRows(simulation, simulation.spl, 'SPL')];
    dataTable = [...dataTable, ...this.detectedRows(simulation, simulation.per, 'PER')];
    this.timelineData.dataTable = null;
    this.timelineData = assign({}, merge(this.timelineData, { dataTable: dataTable }));
  }

  private distributionRows(simulation): any[] {
    const rows = [];
    let idx = 0;
    for (let i = 0; i < simulation.stream.size; i += simulation.stream.shift) {
      const d = simulation.stream.distributions[idx++ % simulation.stream.distributions.length];
      rows.push(['DIS', d.name, i / 100, Math.min(i + simulation.stream.shift, simulation.stream.size) / 100]);
    }
    return rows;
  }

  private generatedRows(simulation): any[] {
    const rows = [];
    simulation.generated.forEach(g => {
      rows.push(['GEN', g.value.toString(), g.emergence / 100, g.melting != null ? g.melting / 100 : simulation.stream.size / 100]);
    });
    return rows;
  }

  private detectedRows(simulation, run, tag): any[] {
    const rows = [];
    run.detected.forEach(g => {
      rows.push([tag, g.value.toString(), g.emergence / 100, g.melting != null ? g.melting / 100 : simulation.stream.size / 100]);
    });
    return rows;
  }
}
