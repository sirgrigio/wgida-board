import { Component, OnInit } from '@angular/core';
import { Simulation } from 'app/models/simulation.model';
import { DatasetService } from 'app/services/dataset/dataset.service';
import { IDatasetFilters } from 'app/components/dataset/dataset.component';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.scss']
})
export class SimulationsComponent implements OnInit {

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

  loaders = {
    timeline: false
  };

  timelineData =  {
    chartType: 'Timeline',
    dataTable: [],
    options: {'title': 'Timeline'},
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
    console.log(event);
  }
}
