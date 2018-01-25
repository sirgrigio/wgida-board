import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Simulation } from 'app/models/simulation.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatasetService {

  constructor(private http: HttpClient) { }

  public getDatasets(): Observable<Simulation[]> {
    return this.http.get<Simulation[]>('/assets/data/datasets.json');
  }

}
