import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Simulation } from 'app/models/simulation.model';
import { Observable } from 'rxjs/Observable';
import { keys } from 'lodash';

export interface IPrecisionRecall {
  van: { precision: number, recall: number };
  sim: { precision: number, recall: number };
  spl: { precision: number, recall: number };
  per: { precision: number, recall: number };
}

export interface ICommunication {
  van: { raw: ICommunicationComposition, weighted: ICommunicationComposition };
  sim: { raw: ICommunicationComposition, weighted: ICommunicationComposition };
  spl: { raw: ICommunicationComposition, weighted: ICommunicationComposition };
  per: { raw: ICommunicationComposition, weighted: ICommunicationComposition };
}

export interface ICommunicationComposition {
  messages: {
    identify: number;
    freq_req: number;
    freq_rep: number;
    verify: number;
    active_gi: number;
  };
  payloads: {
    identify: number;
    freq_req: number;
    freq_rep: number;
    verify: number;
    active_gi: number;
  };
}

@Injectable()
export class DatasetService {

  private algorithms = ['van', 'sim', 'spl', 'per'];
  private messages = ['identify', 'freq_req', 'freq_rep', 'verify', 'active_gi'];

  private prShiftWindowDict;
  private prWindowThresholdDict;
  private overallCommunication;
  private windowCommunication;
  private thresholdCommunication;

  constructor(private http: HttpClient) { }

  public getDataset(): Observable<Simulation[]> {
    return this.http.get<Simulation[]>('./assets/data/datasets.json');
  }

  public parseDataset(dataset: Simulation[]): Promise<void> {
    return new Promise(
      (resolve, reject) => {
        this.prShiftWindowDict = {};
        this.prWindowThresholdDict = {};
        this.overallCommunication = {};
        this.windowCommunication = {};
        this.thresholdCommunication = {};
        this.messages.forEach(m => {
          this.algorithms.forEach(a => {
            this.overallCommunication[a] = {
              raw: {
                messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
              },
              weighted: {
                messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
              }
            };
          });
        });
        dataset.forEach(s => {
          if (!this.prShiftWindowDict[s.stream.shift]) {
            this.prShiftWindowDict[s.stream.shift] = {};
          }
          if (!this.prWindowThresholdDict[s.config.window]) {
            this.prWindowThresholdDict[s.config.window] = {};
          }
          const prShift = this.prShiftWindowDict[s.stream.shift];
          if (!prShift[s.config.window]) {
            prShift[s.config.window] = {
              count: 0,
              van: { precision: 0, recall: 0 },
              sim: { precision: 0, recall: 0 },
              spl: { precision: 0, recall: 0 },
              per: { precision: 0, recall: 0 }
            };
          }
          const prWindow = this.prWindowThresholdDict[s.config.window];
          if (!prWindow[s.config.threshold]) {
            prWindow[s.config.threshold] = {
              count: 0,
              van: { precision: 0, recall: 0 },
              sim: { precision: 0, recall: 0 },
              spl: { precision: 0, recall: 0 },
              per: { precision: 0, recall: 0 }
            };
          }
          if (!this.windowCommunication[s.config.window]) {
            this.windowCommunication[s.config.window] = {};
            this.algorithms.forEach(a => {
              this.windowCommunication[s.config.window][a] = {
                count: 0,
                raw: {
                  messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                  payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                },
                weighted: {
                  messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                  payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                }
              };
            });
          }
          if (!this.thresholdCommunication[s.config.threshold]) {
            this.thresholdCommunication[s.config.threshold] = {};
            this.algorithms.forEach(a => {
              this.thresholdCommunication[s.config.threshold][a] = {
                count: 0,
                raw: {
                  messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                  payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                },
                weighted: {
                  messages: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                  payloads: { identify: 0, freq_req: 0, freq_rep: 0, verify: 0, active_gi: 0 },
                }
              };
            });
          }
          const prShiftWindow = prShift[s.config.window];
          const prWindowThreshold = prWindow[s.config.threshold];
          prShiftWindow.count += 1;
          prWindowThreshold.count += 1;
          this.algorithms.forEach(alg => {
            prShiftWindow[alg].precision += s[alg].precision;
            prShiftWindow[alg].recall += s[alg].recall;
            prWindowThreshold[alg].precision += s[alg].precision;
            prWindowThreshold[alg].recall += s[alg].recall;
            this.messages.forEach(m => {
              const msgs = s[alg].communication[m].messages;
              const plds = s[alg].communication[m].payloads;
              this.overallCommunication[alg].raw.messages[m] += msgs;
              this.overallCommunication[alg].raw.payloads[m] += plds;
              this.overallCommunication[alg].weighted.messages[m] += msgs / s.stream.size;
              this.overallCommunication[alg].weighted.payloads[m] += plds / s.stream.size;
              this.windowCommunication[s.config.window][alg].count += 1;
              this.windowCommunication[s.config.window][alg].raw.messages[m] += msgs;
              this.windowCommunication[s.config.window][alg].raw.messages[m] += plds;
              this.windowCommunication[s.config.window][alg].weighted.messages[m] += msgs / s.stream.size;
              this.windowCommunication[s.config.window][alg].weighted.payloads[m] += plds / s.stream.size;
              this.thresholdCommunication[s.config.threshold][alg].count += 1;
              this.thresholdCommunication[s.config.threshold][alg].raw.messages[m] += msgs;
              this.thresholdCommunication[s.config.threshold][alg].raw.messages[m] += plds;
              this.thresholdCommunication[s.config.threshold][alg].weighted.messages[m] += msgs / s.stream.size;
              this.thresholdCommunication[s.config.threshold][alg].weighted.payloads[m] += plds / s.stream.size;
            });
          });
        });
        this.algorithms.forEach(a => {
          this.messages.forEach(m => {
            this.overallCommunication[a].raw.messages[m] /= dataset.length;
            this.overallCommunication[a].raw.payloads[m] /= dataset.length;
            this.overallCommunication[a].weighted.messages[m] /= dataset.length;
            this.overallCommunication[a].weighted.payloads[m] /= dataset.length;
          });
        });
        resolve();
      }
    );
  }

  public getShiftWindowPR(shift: number, window: number): IPrecisionRecall {
    return this.computeIPR(this.prShiftWindowDict[shift][window]);
  }

  public getWindowThresholdPR(window: number, threshold: number): IPrecisionRecall {
    return this.computeIPR(this.prWindowThresholdDict[window][threshold]);
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

  public getCommunication(): ICommunication {
    return this.overallCommunication;
  }

  public getWindowMessageStats(window: number): ICommunication {
    return this.computeIC(this.windowCommunication[window]);
  }

  public getThresholdMessageStats(threshold: number): ICommunication {
    return this.computeIC(this.thresholdCommunication[threshold]);
  }

  private computeIC(e): ICommunication {
    if (e) {
      const dict = {};
      this.algorithms.forEach(a => {
        dict[a] = { raw: { messages: {}, payloads: {} }, weighted: { messages: {}, payloads: {} } };
        this.messages.forEach(m => {
          dict[a].raw.messages[m] = e[a].raw.messages[m] / e.count;
          dict[a].raw.payloads[m] = e[a].raw.payloads[m] / e.count;
          dict[a].weighted.messages[m] = e[a].weighted.messages[m] / e.count;
          dict[a].weighted.payloads[m] = e[a].weighted.payloads[m] / e.count;
        });
      });
      return e;
    } else {
      return undefined;
    }
  }
}
