import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Simulation } from 'app/models/simulation.model';
import { Observable } from 'rxjs/Observable';

export interface IPrecisionRecall {
  van: { precision: number, recall: number };
  sim: { precision: number, recall: number };
  spl: { precision: number, recall: number };
  per: { precision: number, recall: number };
}

@Injectable()
export class DatasetService {

  private algorithms = ['van', 'sim', 'spl', 'per'];

  private shiftWindowDict;
  private windowThresholdDict;

  constructor(private http: HttpClient) { }

  public getDataset(): Observable<Simulation[]> {
    return this.http.get<Simulation[]>('/assets/data/datasets.json');
  }

  public parseDataset(dataset: Simulation[]): Promise<void> {
    return new Promise(
      (resolve, reject) => {
        this.shiftWindowDict = {};
        this.windowThresholdDict = {};
        dataset.forEach(s => {
          if (!this.shiftWindowDict[s.stream.shift]) {
            this.shiftWindowDict[s.stream.shift] = {};
          }
          if (!this.windowThresholdDict[s.config.window]) {
            this.windowThresholdDict[s.config.window] = {};
          }
          const shift = this.shiftWindowDict[s.stream.shift];
          if (!shift[s.config.window]) {
            shift[s.config.window] = {
              count: 0,
              van: { precision: 0, recall: 0 },
              sim: { precision: 0, recall: 0 },
              spl: { precision: 0, recall: 0 },
              per: { precision: 0, recall: 0 }
            };
          }
          const window = this.windowThresholdDict[s.config.window];
          if (!window[s.config.threshold]) {
            window[s.config.threshold] = {
              count: 0,
              van: { precision: 0, recall: 0 },
              sim: { precision: 0, recall: 0 },
              spl: { precision: 0, recall: 0 },
              per: { precision: 0, recall: 0 }
            };
          }
          const shiftWindow = shift[s.config.window];
          const windowThreshold = window[s.config.threshold];
          shiftWindow.count += 1;
          windowThreshold.count += 1;
          this.algorithms.forEach(alg => {
            shiftWindow[alg].precision += s[alg].precision;
            shiftWindow[alg].recall += s[alg].recall;
            windowThreshold[alg].precision += s[alg].precision;
            windowThreshold[alg].recall += s[alg].recall;
          });
        });
        resolve();
      }
    );
  }

  public getShiftWindowPR(shift: number, window: number): IPrecisionRecall {
    return this.computeIPR(this.shiftWindowDict[shift][window]);
  }

  public getWindowThresholdPR(window: number, threshold: number): IPrecisionRecall {
    return this.computeIPR(this.windowThresholdDict[window][threshold]);
  }

  private computeIPR(e): IPrecisionRecall {
    if (e) {
      return {
        van: { precision: e.van.precision / e.count, recall: e.van.recall / e.count },
        sim: { precision: e.sim.precision / e.count, recall: e.sim.recall / e.count },
        spl: { precision: e.spl.precision / e.count, recall: e.spl.recall / e.count },
        per: { precision: e.per.precision / e.count, recall: e.per.recall / e.count },
      };
    } else {
      return undefined;
    }
  }
}
