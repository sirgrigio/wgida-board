import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'app/services/dataset/dataset.service';
import { Dataset } from 'app/models/dataset.model';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  loading: boolean;
  datasets: Dataset[];
  rows = [];
  columns = [
    { prop: 'name', name: 'Dataset' },
    { prop: 'simulations', name: 'Simulations' },
    { prop: 'seeds', name: 'Seeds' },
    { prop: 'windows', name: 'Windows' },
    { prop: 'thresholds', name: 'Thresholds' },
    { prop: 'streams', name: 'Streams' },
    { prop: 'size', name: 'Avg stream size' },
  ];

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.loading = true;
    this.datasetService.getDatasets().subscribe(
      (datasets: Dataset[]) => {
        this.datasets = datasets;
        this.datasets.forEach(d => {
          this.rows.push({
            name: 'dataset',
            simulations: d.simulations.length,
            seeds: new Set(d.simulations.map(s => s.config.seed)).size,
            windows: new Set(d.simulations.map(s => s.config.window)).size,
            thresholds: new Set(d.simulations.map(s => s.config.threshold)).size,
            streams: new Set(d.simulations.map(s => s.stream.filename)).size,
            size: d.simulations.map(s => s.stream.size).reduce((a, b) => a + b) / d.simulations.length,
          });
        });
        this.rows = [...this.rows];
        this.loading = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSelect(event) {
    console.log(event);
  }

}
