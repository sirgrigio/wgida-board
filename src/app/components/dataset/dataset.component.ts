import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'app/services/dataset/dataset.service';
import { Dataset } from 'app/models/dataset.model';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {

  }

}
