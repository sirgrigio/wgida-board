import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Dataset } from 'app/models/dataset.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatasetService {

  constructor(private http: HttpClient) { }

  public getDatasets(): Observable<Dataset[]> {
    return this.http.get<Dataset[]>('/assets/data/datasets.json');
  }

}
